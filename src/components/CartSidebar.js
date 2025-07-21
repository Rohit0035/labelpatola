import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, toggleCartSidebar, updateCartQuantity } from '../actions/cartActions';
import { IMAGE_URL } from '../utils/api-config';
import { Link } from 'react-router-dom';

function CartSidebar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.cart?.isSidebarOpen);
    const sidebarRef = useRef(null);

    const cartItems = useSelector(state => state.cart?.cart?.items) || []; // ✅ Ensure cartItems is always an array
    console.log('cartItems', cartItems);

    const subtotal = cartItems.length > 0
        ? cartItems.reduce((total, item) => total + (item.product_variation?.sale_price || 0) * item.quantity, 0)
        : 0; // ✅ If cart is empty, subtotal = 0

    return (
        <>
            <Offcanvas show={isSidebarOpen} onHide={() => dispatch(toggleCartSidebar(false))} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="offcanvas-body">
                        {cartItems.length > 0
                            ?
                            <div className="cart-product-list d-flex flex-column">
                                {cartItems.map((item) =>
                                    <>
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
                                                
                                                <p className="">{item.product_variation?.color?.name} / {item.product_variation?.size?.name}</p>
                                                
                                                <h5 className="mb-0 cart-product-price">₹{item.product_variation?.sale_price}</h5>
                                                <div className="d-flex align-items-center justify-content-between mt-2">
                                                    <div className="input-group">
                                                        <button
                                                            className="btn border border-2 border-end-0"
                                                            data-decrement=""
                                                            type="button"
                                                            onClick={()=>dispatch(
                                                                updateCartQuantity(
                                                                item.product.id,
                                                                item.product_variation,
                                                                parseInt(item.quantity) - 1,
                                                                item.id
                                                                )
                                                            )}
                                                        >
                                                            <i className="bi bi-dash" />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="form-control border-2 text-center"
                                                            min={0}
                                                            defaultValue={1}
                                                            readOnly
                                                            name="quantity"
                                                            value={item.quantity}
                                                        />
                                                        <button
                                                            className="btn border border-2 border-start-0"
                                                            data-increment=""
                                                            type="button"
                                                            onClick={()=>dispatch(
                                                                updateCartQuantity(
                                                                item.product.id,
                                                                item.product_variation,
                                                                parseInt(item.quantity) + 1,
                                                                item.id
                                                                )
                                                            )}
                                                        >
                                                            <i className="bi bi-plus" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="cart-product-btn-delete btn btn-outline-dark border btn-sm rounded-3"
                                                        onClick={() =>
                                                            dispatch(removeFromCart(item.product.id, item.product_variation, item.id))}
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
                    {cartItems.length > 0 &&
                        <div className="cart-product-checout p-3 border-top">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <p className="mb-0">Subtotal</p>
                                <h5 className="mb-0">₹{subtotal}</h5>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Link
                                    to="/cart"
                                    className="btn btn-light border px-4 py-2 flex-fill"
                                >
                                    View Cart
                                </Link>
                                <Link
                                    to="/checkout"
                                    className="btn btn-dark px-4 py-2 border border-dark flex-fill"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CartSidebar;