import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../api/productAPI';
import { showToast } from './ToastifyNotification';
import { hideLoader, showLoader } from '../actions/loaderActions';
import { fetchWebsiteCommonSettings } from '../api/homeAPI';
import { IMAGE_URL } from '../utils/api-config';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [debouncedSearchKey, setDebouncedSearchKey] = useState('');
  const [websiteCommonSettings, setWebsiteCommonSettings] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const dispatch = useDispatch();

  /* ----------------------------------
     Fetch Website Common Settings
  -----------------------------------*/
  const getWebsiteCommonSettings = async () => {
    try {
      const data = await fetchWebsiteCommonSettings();
      if (data.success) {
        setWebsiteCommonSettings(data.data);
      }
    } catch (error) {
      console.error('Error fetching WebsiteCommonSettings:', error);
    }
  };

  useEffect(() => {
    getWebsiteCommonSettings();
  }, []);

  /* ----------------------------------
     Debounce Search Input
  -----------------------------------*/
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchKey(searchKey.trim());
      setCurrentPage(1);
    }, 700);

    return () => clearTimeout(handler);
  }, [searchKey]);

  /* ----------------------------------
     Fetch Products (API)
  -----------------------------------*/
  const getProducts = useCallback(async () => {
    if (!debouncedSearchKey) return;

    try {
      setLoading(true);
      dispatch(showLoader());

      const filters = { searchKey: debouncedSearchKey };
      const data = await fetchProducts(filters, currentPage, itemsPerPage);

      if (data.success) {
        setProducts(data.data.products.data);
        setTotalPages(data.data.products.last_page);
        setCurrentPage(data.data.products.current_page);
      } else {
        showToast('error', data.message || 'Failed to fetch products.');
      }
    } catch (error) {
      showToast('error', error.message || 'Unexpected error during fetch.');
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  }, [debouncedSearchKey, currentPage, dispatch]);

  /* ----------------------------------
     Trigger API on Debounced Value
  -----------------------------------*/
  useEffect(() => {
    if (debouncedSearchKey.length > 0) {
      getProducts();
    } else {
      setProducts([]);
    }
  }, [debouncedSearchKey, currentPage, getProducts]);

  if (!isOpen) return null;

  /* ----------------------------------
     UI
  -----------------------------------*/
  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="modal-header p-4 d-flex justify-content-between align-items-center">
          <h5 className="m-0">Search</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <div className="modal-body p-4">
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Search the products"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />

          {/* Top Keywords */}
          <div className="mb-3">
            <h6>Top search keywords</h6>
            <div className="d-flex gap-2 flex-wrap">
              {websiteCommonSettings?.search_keywords
                ?.split(',')
                ?.map((keyword, index) => (
                  <button
                    key={index}
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setSearchKey(keyword.trim())}
                  >
                    {keyword.trim()}
                  </button>
                ))}
            </div>
          </div>

          {/* Search Results */}
          <div>
            <h6 className="mb-2">
              Search results for "{debouncedSearchKey}"
            </h6>

            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className="border p-3 mb-2 rounded d-flex justify-content-between align-items-center"
                >
                  <Link
                    to={`/product-detail/${product?.slug}`}
                    onClick={onClose}
                  >
                    <img
                      src={`${IMAGE_URL}/${product?.product_variations?.[0]?.image || product?.feature_image}`}
                      alt={product?.name}
                      width={100}
                      className="me-3 rounded"
                    />
                  </Link>

                  <div className="flex-grow-1">
                    <p className="mb-1 st-pro-name">{product?.name}</p>
                    <p className="mb-0 st-mb-price">
                      ₹{product?.product_variations?.[0]?.sale_price}
                      {parseFloat(product?.product_variations?.[0]?.regular_price) !==
                        parseFloat(product?.product_variations?.[0]?.sale_price) && (
                        <span className="text-danger ms-2 text-decoration-line-through">
                          ₹{product?.product_variations?.[0]?.regular_price}
                        </span>
                      )}
                    </p>

                    <Link
                      to={`/product-detail/${product?.slug}`}
                      className="mt-2 btn btn-dark d-block d-md-none"
                      onClick={onClose}
                    >
                      View
                    </Link>
                  </div>

                  <Link
                    to={`/product-detail/${product?.slug}`}
                    className="btn btn-dark ms-3 d-none d-md-block"
                    onClick={onClose}
                  >
                    View
                  </Link>
                </div>
              ))
            ) : debouncedSearchKey && !loading ? (
              <p>No products found for "{debouncedSearchKey}".</p>
            ) : (
              <p>Start typing to search for products.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
