import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../components/ToastifyNotification';
import { removeFromCart, toggleCartSidebar, updateCartQuantity } from '../actions/cartActions';
import { verifyCoupon } from '../api/couponAPI';
import { IMAGE_URL } from '../utils/api-config';

const ShoppingCart = () => {
    const dispatch = useDispatch();
	const cart = useSelector(state => state.cart.cart);
	const isAuthenticated = useSelector(state => state.auth?.isAuthenticated);
	const navigate = useNavigate();

	const [couponCode, setCouponCode] = useState("");
	const [discount, setDiscount] = useState(0);
	const [isCouponApplied, setIsCouponApplied] = useState(false);

	const subtotal = cart.items?.reduce(
		(total, item) => total + item.product_variation.sale_price * item.quantity,
		0
	);
	const regilarTotal = cart.items?.reduce(
		(total, item) => total + item.product_variation.regular_price * item.quantity,
		0
	);
    const youSaved = regilarTotal - subtotal;
	const tax = 0; // Example static tax
	const total = subtotal - discount + tax;

	const applyCoupon = async () => {
		if (!couponCode) {
			showToast("error", "Please enter a coupon code");
			return;
		}

		try {
			const response = await verifyCoupon({ coupon: couponCode });
            
			if (response.success) {
			const coupon = response.data;
			const { discount_type, discount_value, min_purchase, max_discount } = coupon;

			if (min_purchase !== null && subtotal < min_purchase) {
				showToast("error", `Minimum purchase of ₹${min_purchase} required.`);
				return;
			}

			let discountAmount = 0;

			if (discount_type === "Fixed") {
				discountAmount = discount_value;
			} else if (discount_type === "Percentage") {
				discountAmount = (subtotal * discount_value) / 100;
				if (max_discount !== null) {
				discountAmount = Math.min(discountAmount, max_discount);
				}
			}

			discountAmount = Math.min(discountAmount, subtotal);

			showToast("success", `Coupon applied! You saved ₹${discountAmount}.`);
			setDiscount(discountAmount);
			// setIsCouponApplied(true);

			dispatch({
				type: "APPLY_DISCOUNT",
				payload: { discount: discountAmount, coupon_code: couponCode }
			});
			} else {
			showToast("error", response.message);
			}
		} catch (error) {
			showToast("error", "Failed to apply coupon. Please try again.");
		}
		};


	const handleCheckout = () => {
		if (isAuthenticated) {
			navigate('/checkout');
		} else {
			showToast('error', 'Please login to continue');
			navigate('/sign-in');
		}
	};

    return (
        <>
            <Header />
            {/*start main content*/}
            <main className="main-content">
                {/*start breadcrumb*/}
                <section className="py-4 section-breadcrumb">
                    <div className="container px-3">
                        <nav>
                            <ol className="breadcrumb mb-0 gap-2">
                                <li className="breadcrumb-item">
                                    <a href="javascript:;" className="breadcrumb-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript:;" className="breadcrumb-link">
                                        Cart
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">Cart</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {cart.items?.length > 0 ?
                
                (<section className="py-5">
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-xl-8">
                                <div className="cart-list d-flex flex-column gap-4">
                                    {
                                        cart.items.map((item, index) => (
                                            <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3" key={index}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="cart-img">
                                                        <img
                                                            src={`${IMAGE_URL}/${item.product_variation.image}`}
                                                            className="rounded-3"
                                                            width={80}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <h5 className="product-name fs-6">{item.product.name}</h5>
                                                        <div className="mt-3 d-flex align-items-center gap-2">
                                                            <p className="product-color fs-6">{item.product_variation?.color?.name} / {item.product_variation?.size?.name}</p>
                                                        </div>
                                                    {/* </div>
                                                    <div className="product-quantity mt-4"> */}
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
                                                                style={{ width: "100px" }}
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
                                                    </div>
                                                </div>
                                                <div className="cart-product-price">
                                                    <h5 className="product-price fs-6">₹{item.product_variation.sale_price}</h5>
                                                    <p className="product-quantity fs-6">Quantity: {item.quantity}</p>
                                                </div>
                                                <div className="cart-product-remove">
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Remove"
                                                        onClick={() =>
                                                            dispatch(removeFromCart(item.product.id, item.product_variation, item.id))}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="card border-0 rounded-4 bg-light">
                                    <div className="card-body">
                                        <div className="checkout-card p-2">
                                            <h4 className="mb-0">Order Summary</h4>
                                            <div className="my-4 border-1 border-top" />
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">Subtotal</p>
                                                <p className="mb-0">₹{subtotal}</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">You Saved</p>
                                                <p className="mb-0">₹{youSaved}</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">Discounts</p>
                                                <p className="mb-0 text-danger">-₹{discount}</p>
                                            </div>
                                            {/* <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">Shipping</p>
                                                <p className="mb-0">+₹16.00</p>
                                            </div> */}
                                            <div className="my-3 border-1 border-top" />
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0 fs-5 fw-semibold">Total</p>
                                                <p className="mb-0 fs-5 fw-semibold">₹{total}</p>
                                            </div>
                                            <div className="text-end mb-3">
                                                <p className="mb-0 fs-6">(Inclusive of all taxes)</p>
                                            </div>
                                            <div className="form-check my-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    I agree with the terms and conditions
                                                </label>
                                            </div>
                                            <div className="d-grid">
                                                <Link
                                                    to="/checkout"
                                                    className="btn btn-dark py-2 rounded-3"
                                                >
                                                    Proceed to checkout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 rounded-4 bg-light mt-4">
                                    <div className="card-body">
                                        <div className="checkout-promocode p-2">
                                            <p className="mb-2 fw-semibold">% Apply promo code</p>
                                            <div className="d-flex align-items-center gap-2">
                                                <input
                                                    type="text"
                                                    className="form-control border-2"
                                                    placeholder="Enter promo code"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                                    disabled={isCouponApplied}
                                                />
                                                <button 
                                                    className="btn btn-dark px-3" 
                                                    type="button"
                                                    onClick={applyCoupon}
                                                    disabled={isCouponApplied}
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>):(<section className="empty-cart text-center py-40">
			                <h3>Your cart is empty!</h3>
			                <Link to="/shop" className="btn btn-main px-24 py-12 rounded-8">Continue Shopping</Link>
		                    </section>)
                }
                {/*end cart*/}
            </main>
            {/*end main content*/}


            <Footer />
        </>

    );
};

export default ShoppingCart;
