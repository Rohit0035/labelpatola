import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_URL } from '../utils/api-config';
import { fetchProducts } from '../api/productAPI';
import { showToast } from './ToastifyNotification';
import { hideLoader, showLoader } from '../actions/loaderActions';
import { fetchWebsiteCommonSettings } from '../api/homeAPI';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap'; // Import Bootstrap's Modal object

const SearchModal = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10; // Define items per page here

    // State for all filters and sorting combined
    const [currentFilters, setCurrentFilters] = useState({
        searchKey: '',
    });

    const [active, setActive] = useState(false); // For sidebar control
    const sidebarController = () => setActive(!active);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [websiteCommonSettings, setWebsiteCommonSettings] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const dispatch = useDispatch(); // If you're using Redux for other things

    const getWebsiteCommonSettings = async () => {
        try {
            const data = await fetchWebsiteCommonSettings();
            if (data.success) {
                setWebsiteCommonSettings(data.data);
            }
        } catch (error) {
            console.error("Error fetching WebsiteCommonSettings:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getWebsiteCommonSettings();
    }, []);

    // Extracted product fetching logic into a memoized callback
    const getProducts = useCallback(async () => {
        try {
            setLoading(true);
            dispatch(showLoader());
            const data = await fetchProducts(
                currentFilters, // Pass the currentFilters object
                currentPage,    // Pass the current page
                itemsPerPage    // Pass the items per page
            );

            if (data.success) {
                setProducts(data.data.products.data);
                setTotalPages(data.data.products.last_page);
                setCurrentPage(data.data.products.current_page); // Ensure current_page matches if API changes it
            } else {
                showToast('error', data.message || 'Failed to fetch products.');
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            showToast('error', error.message || 'An unexpected error occurred during product fetch.');
        } finally {
            dispatch(hideLoader());
            setLoading(false);
        }
    }, [currentFilters, currentPage, itemsPerPage, dispatch]); // Dependencies for useCallback

    // Debounce effect for searchKey
    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchKey.length > 0) {
                setCurrentFilters(prevFilters => ({
                    ...prevFilters,
                    searchKey: searchKey,
                }));
                setCurrentPage(1); // Reset to page 1 for new search
            } else {
                setProducts([]); // Clear products when searchKey is empty
                setCurrentFilters(prevFilters => ({ // Also clear searchKey from filters
                    ...prevFilters,
                    searchKey: '',
                }));
            }
        }, 500); // 500ms debounce time

        return () => {
            clearTimeout(handler); // Cleanup the timeout on unmount or if searchKey changes
        };
    }, [searchKey]);

    // This useEffect will now trigger getProducts whenever currentFilters or currentPage changes
    useEffect(() => {
        if (currentFilters.searchKey.length > 0) {
            getProducts();
        }
    }, [currentFilters, currentPage, getProducts]); // Depend on the memoized getProducts function

    // This function will be called by ProductFilters whenever filters change
    const handleFiltersApplied = (filtersToApply) => {
        // When filters are applied, update currentFilters and reset to page 1
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            ...filtersToApply, // Merge new filters (categories, sizes, colors, priceRange, availability)
        }));
        setCurrentPage(1); // Crucial: Reset to page 1 when new filters are applied
    };

    // --- REVISED FUNCTION TO CLOSE MODAL AND BACKDROP ---
    const closeModal = useCallback(() => {
        const searchModalElement = document.getElementById('searchModal');
        if (searchModalElement) {
            const modal = Modal.getInstance(searchModalElement);
            if (modal) {
                modal.hide();
            }

            // A small delay might be necessary to ensure Bootstrap's transition finishes
            // before removing the backdrop and class. However, for immediate navigation
            // this direct removal might be more effective.
            const removeBackdropAndClass = () => {
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
                document.body.classList.remove('modal-open');
                document.body.style.overflow = ''; // Ensure overflow is reset
                document.body.style.paddingRight = ''; // Reset padding if Bootstrap added it
            };

            // You can try calling it directly or with a slight timeout
            removeBackdropAndClass();
        }
    }, []);

    // Effect to clean up modal state when component unmounts or modal is closed by other means
    useEffect(() => {
        const searchModalElement = document.getElementById('searchModal');
        if (searchModalElement) {
            // Add event listener for when the modal is completely hidden
            searchModalElement.addEventListener('hidden.bs.modal', () => {
                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
            });
        }
    }, []); // Run only once on mount

    return (
        <>
            {/* start search modal */}
            <div
                className="modal fade search-modal"
                id="searchModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content p-lg-2 p-0">
                        <div className="p-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <h1 className="modal-title fs-5 mb-0">Search</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={closeModal} 
                                />
                            </div>
                            <form className="position-relative mt-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg form-control-search pe-5 border-2"
                                    placeholder="Search the products"
                                    value={searchKey}
                                    onChange={(e) => setSearchKey(e.target.value)}
                                />
                                <span className="position-absolute top-50 end-0 translate-middle-y">
                                    <i className="bi bi-search fs-6 me-3" />
                                </span>
                            </form>
                            <div className="search-keywords mt-4">
                                <h5 className="mb-3">Top searches keywords</h5>
                                <div className="d-flex align-items-center flex-nowrap gap-2 overflow-x-auto">
                                    {
                                        websiteCommonSettings?.search_keywords?.split(',')?.map((keyword, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                                onClick={() => setSearchKey(keyword.trim())} // Trim keyword
                                            >
                                                {keyword.trim()} {/* Trim keyword */}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-body p-4">
                            <div className="recently-viewed">
                                <h5 className="mb-3">Search results for "{searchKey}"</h5>
                                <div className="d-flex flex-column gap-3">
                                    {
                                        products.length > 0 ? (
                                            products.map((product, index) => (
                                                <div
                                                    key={index}
                                                    className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 border p-3 rounded-3"
                                                >
                                                    {/* Add onClick to close modal */}
                                                    <Link to={`/product-detail/${product?.slug}`} onClick={closeModal}>
                                                        <img
                                                            src={`${IMAGE_URL}/${product?.product_variations?.[0]?.image || product?.feature_image}`}
                                                            className="rounded-3"
                                                            width={100}
                                                            alt={product?.name} // Add alt text for accessibility
                                                        />
                                                    </Link>
                                                    <div className="flex-grow-1">
                                                        <h4 className="mb-1">
                                                            <span className="sale-price">
                                                            ₹{product?.product_variations?.[0]?.sale_price || product?.product_variations?.[0]?.sale_price}
                                                            </span>
                                                            {parseFloat(product?.product_variations?.[0]?.regular_price) !== parseFloat(product?.product_variations?.[0]?.sale_price)  && (
                                                            <span className="sale-price text-decoration-line-through text-danger ms-2">
                                                                ₹{product?.product_variations?.[0]?.regular_price}
                                                            </span>
                                                            )}
                                                        </h4>
                                                        <p className="mb-0">
                                                            {product?.name}
                                                        </p>
                                                    </div>
                                                    <div className="d-grid gap-2">
                                                        {/* Add onClick to close modal */}
                                                        <Link
                                                            to={`/product-detail/${product?.slug}`}
                                                            className="btn btn-dark border border-dark px-4"
                                                            onClick={closeModal}
                                                        >
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            searchKey.length > 0 && !loading ? (
                                                <p>No products found for "{searchKey}".</p>
                                            ) : (
                                                <p>Start typing to search for products.</p>
                                            )
                                        )
                                    }
                                    {
                                        totalPages > 1 && products.length > 0 && (
                                            <div className="d-flex justify-content-center mt-3">
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                            <button className="page-link" onClick={() => setCurrentPage(prev => prev - 1)} aria-label="Previous">
                                                                <span aria-hidden="true">&laquo;</span>
                                                            </button>
                                                        </li>
                                                        {[...Array(totalPages)].map((_, index) => (
                                                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                                                    {index + 1}
                                                                </button>
                                                            </li>
                                                        ))}
                                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                            <button className="page-link" onClick={() => setCurrentPage(prev => prev + 1)} aria-label="Next">
                                                                <span aria-hidden="true">&raquo;</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end search modal */}
        </>
    );
};

export default SearchModal;