import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_URL } from '../utils/api-config';
import { removeFromCart } from '../actions/cartActions';

const CartSidebar = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart?.cart?.items) || []; // ✅ Ensure cartItems is always an array
    console.log('cartItems', cartItems);

    const subtotal = cartItems.length > 0
        ? cartItems.reduce((total, item) => total + (item.product_variation?.sale_price || 0) * item.quantity, 0)
        : 0; // ✅ If cart is empty, subtotal = 0
    return (
        <>
            <>
                {/*start off canvas cart*/}
                <div
                    className="offcanvas offcanvas-end offcanvas-cart p-2"
                    tabIndex={-1}
                    id="offcanvasCart"
                >
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title">Shopping cart</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        {cartItems.length > 0
                            ?
                            <div className="cart-product-list d-flex flex-column">
                                {cartItems.map((item) =>
                                    <>
                                        <div className="cart-product-list-item d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <a href="javascript:;">
                                                    <img
                                                        src={`${IMAGE_URL}/${item.product_variation.image}`}
                                                        width={100}
                                                        className="cart-product-img rounded-3"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="cart-product-info flex-grow-1">
                                                <p className="mb-1 cart-product-name">{item.product.name}</p>
                                                <h5 className="mb-0 cart-product-price">₹{item.product_variation.sale_price}</h5>
                                                <div className="d-flex align-items-center justify-content-between mt-2">
                                                    <p className="mb-0 font-14 cart-product-qty">Qty {item.quantity}</p>
                                                    <button
                                                        type="button"
                                                        className="cart-product-btn-delete btn btn-outline-dark border btn-sm rounded-3"
                                                        onClick={() =>
                                                            dispatch(removeFromCart(item.product.id, item.product_variation,item.id))}
                                                    >
                                                        <i className="bi bi-trash3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-bottom border-1 border" />
                                    </>
                                )}

                            </div>
                            : <div className="empty-cart p-10 text-center flex flex-col items-center justify-center h-full">
                                {/* <ShoppingCart size={60} color="#ccc" /> */}
                                <p className="text-black">No products in the cart.</p>
                                <Link
                                    to="/shop"
                                    className="btn btn-outline-dark border btn-sm rounded-3 mt-4"
                                >
                                    Return To Shop
                                </Link>
                            </div>}
                    </div>
                    { cartItems.length > 0 &&
                    <div className="cart-product-checout p-3 border-top">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <p className="mb-0">Subtotal</p>
                            <h5 className="mb-0">₹{subtotal}</h5>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <a
                                href="/cart"
                                className="btn btn-light border px-4 py-2 flex-fill"
                            >
                                View Cart
                            </a>
                            <a
                                href="/checkout"
                                className="btn btn-dark px-4 py-2 border border-dark flex-fill"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                    }
                </div>
                {/*end off canvas cart*/}
            </>

        </>
    );
};

export default CartSidebar;

