import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, toggleCartSidebar, updateCartQuantity } from '../actions/cartActions';
import { IMAGE_URL } from '../utils/api-config';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function CartSidebar() {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.cart?.isSidebarOpen);
    const cartItems = useSelector(state => state.cart?.cart?.items) || [];

    const sidebarRef = useRef(null);

    const subtotal = cartItems.reduce((total, item) =>
        total + (item.product_variation?.sale_price || 0) * item.quantity, 0);

    // Close offcanvas when backdrop is clicked or close button is pressed
    const handleClose = () => {
        dispatch(toggleCartSidebar(false));
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') handleClose();
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <div
                className={classNames(
                    'offcanvas offcanvas-end',
                    { show: isSidebarOpen }
                )}
                tabIndex="-1"
                ref={sidebarRef}
                style={{ visibility: isSidebarOpen ? 'visible' : 'hidden', backgroundColor: '#fff', zIndex: 1055 }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Shopping Cart</h5>
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-between">
                    <div>
                        {cartItems.length > 0 ? (
                            <div className="cart-product-list d-flex flex-column">
                                {cartItems.map((item) => (
                                    <div key={item.id}>
                                        <div className="cart-product-list-item d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <Link to={`/product-detail/${item.product.slug}`}>
                                                    <img
                                                        src={`${IMAGE_URL}/${item?.product_variation?.image || item?.product?.feature_image}`}
                                                        width={100}
                                                        className="cart-product-img rounded-3"
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cart-product-info flex-grow-1">
                                                <p className="mb-1 cart-product-name">{item.product.name}</p>
                                                <p>{item.product_variation?.color?.name} / {item.product_variation?.size?.name}</p>
                                                <h5 className="mb-0 cart-product-price">₹{item.product_variation?.sale_price}</h5>
                                                <div className="d-flex align-items-center justify-content-between mt-2">
                                                    <div className="input-group">
                                                        <button
                                                            className="btn border border-2 border-end-0"
                                                            type="button"
                                                            onClick={() =>
                                                                dispatch(updateCartQuantity(
                                                                    item.product.id,
                                                                    item.product_variation,
                                                                    parseInt(item.quantity) - 1,
                                                                    item.id
                                                                ))
                                                            }
                                                        >
                                                            <i className="bi bi-dash" />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="form-control border-2 text-center"
                                                            min={0}
                                                            readOnly
                                                            value={item.quantity}
                                                        />
                                                        <button
                                                            className="btn border border-2 border-start-0"
                                                            type="button"
                                                            onClick={() =>
                                                                dispatch(updateCartQuantity(
                                                                    item.product.id,
                                                                    item.product_variation,
                                                                    parseInt(item.quantity) + 1,
                                                                    item.id
                                                                ))
                                                            }
                                                        >
                                                            <i className="bi bi-plus" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="btn btn-outline-dark border btn-sm rounded-3"
                                                        onClick={() =>
                                                            dispatch(removeFromCart(item.product.id, item.product_variation, item.id))
                                                        }
                                                    >
                                                        <i className="bi bi-trash3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-bottom border-1 border" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-cart p-10 text-center d-flex flex-column align-items-center justify-content-center h-100">
                                <p className="text-black">No products in the cart.</p>
                                <Link to="/shop" className="btn btn-outline-dark border btn-sm rounded-3 mt-4">
                                    Return To Shop
                                </Link>
                            </div>
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <div className="cart-product-checkout p-3 border-top mt-3">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <p className="mb-0">Subtotal</p>
                                <h5 className="mb-0">₹{subtotal}</h5>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Link to="/cart" className="btn btn-light border px-4 py-2 flex-fill">
                                    View Cart
                                </Link>
                                <Link to="/checkout" className="btn btn-dark px-4 py-2 border border-dark flex-fill">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Backdrop */}
            {isSidebarOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={handleClose}
                    style={{ zIndex: 1050 }}
                />
            )}
        </>
    );
}

export default CartSidebar;
