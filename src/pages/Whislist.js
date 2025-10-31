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
        dispatch(showLoader());
        try {
            const data = await fetchUserWishlist();
            if (data.success) {
                setWishlists(data.data);
                console.log(data.data);
            }
        } catch (error) {
            console.error("Error fetching Wishlists:", error);
        } finally {
            dispatch(hideLoader());
        }
    };
    
    const removeFromWishlist = async (wishlistId) => {
        try {
            dispatch(showLoader());
            const data = await removeFromUserWishlist({wishlist_id:wishlistId});
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
            {/*start main content*/}
            <main className="main-content">
                {/*start breadcrumb*/}
                <section className="py-4 section-breadcrumb">
                    <div className="container px-3">
                        <nav>
                            <ol className="breadcrumb mb-0 gap-2">
                                <li className="breadcrumb-item">
                                    <a href="/" className="breadcrumb-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/wishlist" className="breadcrumb-link">
                                        Wishlist
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">Wishlist</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*end breadcrumb*/}
                {/*start shop*/}
                <section className="py-5 shop-page-section">
                    <div className="container px-3">
                        <div className="shop-wishlist">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 g-lg-5">
                                {
                                    wishlists.length > 0 ? wishlists.map((wishlist) => (
                                        <WishlistProductCard key={wishlist.id} product={wishlist.product} product_variation={wishlist.product_variation} wishlistId={wishlist.id} removeFromWishlist={removeFromWishlist}/>
                                    )):
                                    <p>Wishlist is empty</p>
                                }
                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                </section>
                {/*end shop*/}
            </main>
            {/*end main content*/}

            <Footer/>
        </>

    );
};

export default Whislist;
