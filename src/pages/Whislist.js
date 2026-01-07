import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchUserWishlist, removeFromUserWishlist } from '../api/wishlistAPI';
import WishlistProductCard from '../components/wishlistProductCard';
import { SET_WISHLIST_COUNT } from '../actions/wishlistActions';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../components/ToastifyNotification';
import { hideLoader, showLoader } from '../actions/loaderActions';

const Whislist = () => {
    const dispatch = useDispatch();
    const [wishlists, setWishlists] = useState([]);
    const [loading, setLoading] = useState(true);

    const currentCount = useSelector((state) => state.wishlist.count);
    const getWishlists = async () => {
        setLoading(true); // Start loading
        dispatch(showLoader());
        try {
            const data = await fetchUserWishlist();
            if (data.success) {
                setWishlists(data.data);
            }
        } catch (error) {
            console.error("Error fetching Wishlists:", error);
        } finally {
            setLoading(false); // End loading
            dispatch(hideLoader());
        }
    };
    
    const removeFromWishlist = async (productId) => {
        try {
            dispatch(showLoader());
            const data = await removeFromUserWishlist({product_id: productId});
            if (data.success) {
                setWishlists(data.data);
                showToast("success", "Item removed from wishlist!");
                dispatch({ type: SET_WISHLIST_COUNT, payload: Math.max(currentCount - 1, 0) });
                getWishlists();
            }
        } catch (error) {
            console.error("Error fetching Wishlists:", error);
        } finally {
            dispatch(hideLoader());
        }
    };
    
      useEffect(() => {
          getWishlists();
      }, []);
    return (
        <>
            <Header/>
            <main className="main-content">
                {/* Breadcrumb section remains same */}
                <section className="py-5 shop-page-section">
                    <div className="container px-3">
                        <div className="shop-wishlist">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 g-lg-5">
                                {loading ? (
                                    // 1. Show nothing or a Skeleton while loading
                                    <div className="col-12 text-center py-5">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : wishlists.length > 0 ? (
                                    // 2. Show products if they exist
                                    wishlists.map((wishlist) => (
                                        <WishlistProductCard 
                                            key={wishlist.id} 
                                            product={wishlist.product} 
                                            product_variation={wishlist.product_variation} 
                                            wishlistId={wishlist.id} 
                                            removeFromWishlist={removeFromWishlist}
                                        />
                                    ))
                                ) : (
                                    // 3. Show empty message ONLY if loading is finished and array is empty
                                    <div className="col-12 text-center py-5">
                                        <i className="bi bi-heart text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                                        <p className="fs-5">Your wishlist is currently empty.</p>
                                        <a href="/shop" className="btn btn-dark rounded-pill px-4">Continue Shopping</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Whislist;
