import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Modal,Button,Form,Row,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../components/ToastifyNotification';
import { CLEAR_CART } from '../actions/cartActions';
import { placeOrder } from '../api/orderAPI';
import { addUserAddress, deleteUserAddress, getUserAddresses, updateUserAddress } from '../api/addressAPI';
import { createRazorpayOrder } from '../api/paymentAPI';
import { IMAGE_URL } from '../utils/api-config';
import { removeCouponCode, verifyCoupon } from '../api/couponAPI';
import { hideLoader, showLoader } from '../actions/loaderActions';

const Checkout = () => {
	const [selectedPayment, setSelectedPayment] = useState("paynow");
	const [addresses, setAddresses] = useState([]);
	const [selectedAddressId, setSelectedAddressId] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMode, setModalMode] = useState(null); // 'add' or 'edit'
	const [currentAddressToEdit, setCurrentAddressToEdit] = useState(null);
	const [modalFormData, setModalFormData] = useState({
		fullName: "",
		phoneNumber: "",
		alternatePhoneNumber: "",
		pincode: "",
		state: "",
		city: "",
		houseNumber: "",
		area: "",
		nearByFamous: "",
		default: false,
		addressType: "Home",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector((state) => state?.cart.cart);
	const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
	const user = useSelector((state) => state.auth?.user);
	const [razorpayLoaded, setRazorpayLoaded] = useState(false);

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


	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/login");
		}
	}, [isAuthenticated, navigate]);

	useEffect(() => {
		if (cart) {
			setDiscount(cart.discount);
			setCouponCode(cart.coupon_code);
			if(cart.coupon_code){
				setIsCouponApplied(true);
			}else{
				setIsCouponApplied(false);
			}
		}
	}, [isAuthenticated, navigate]);

	const applyCoupon = async () => {
		if (!couponCode) {
			showToast("error", "Please enter a coupon code");
			return;
		}
		dispatch(showLoader());
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
				setIsCouponApplied(true);

				dispatch({
					type: "APPLY_DISCOUNT",
					payload: { discount: discountAmount, coupon_code: couponCode }
				});
			} else {
				showToast("error", response.message);
			}
		} catch (error) {
			showToast("error", "Failed to apply coupon. Please try again.");
		}finally{
			dispatch(hideLoader());
		}
	};
	
	const removeCoupon = async () => {
		if (!couponCode) {
			showToast("error", "Please enter a coupon code");
			return;
		}
		dispatch(showLoader());
		try {
			const response = await removeCouponCode({ coupon: couponCode });

			if (response.success) {

				showToast("success", `Coupon removed!`);
				setDiscount(0);
				setCouponCode("");
				setIsCouponApplied(false);

				dispatch({
					type: "REMOVE_DISCOUNT",
					payload: { discount: 0, coupon_code: null }
				});
			} else {
				showToast("error", response.message);
			}
		} catch (error) {
			showToast("error", "Failed to remove coupon. Please try again.");
		}finally{
			dispatch(hideLoader());
		}
	};

	useEffect(() => {
		const fetchAddresses = async () => {
			if (isAuthenticated && user?.id) {
				dispatch(showLoader());
				try {
					const response = await getUserAddresses();
					if (response?.success) {
						setAddresses(response.data);
						const is_default = response.data.find(
							(addr) => addr.is_default
						);
						if (is_default) {
							setSelectedAddressId(is_default.id);
						} else if (response.data.length > 0) {
							setSelectedAddressId(response.data[0].id);
						}
					} else {
						showToast(
							"error",
							response?.message || "Failed to fetch addresses."
						);
					}
				} catch (error) {
					showToast("error", "Error fetching addresses.");
				}finally{
					dispatch(hideLoader());
				}
			}
		};

		fetchAddresses();
	}, [isAuthenticated, user?.id]);

	if (!cart?.items) {
		return <p className="text-center py-40">Your cart is empty.</p>;
	}

	const handlePaymentChange = (event) => {
		setSelectedPayment(event.target.id);
	};

	const handleAddressSelect = (addressId) => {
		setSelectedAddressId(addressId);
	};

	const openAddAddressModal = () => {
		setModalMode("add");
		setModalFormData({
			// Initialize form for adding
			full_name: "",
			house_no: "",
			house_name: "",
			street: "",
			district: "",
			city: "",
			state: "",
			pincode: "",
			mobile_no: "",
			near_by_landmark: "",
			email: "",
			is_default: false,
			home_or_office: "Home",
		});
		setCurrentAddressToEdit(null);
		setIsModalOpen(true);
	};

	const openEditAddressModal = (address) => {
		setModalMode("edit");
		setModalFormData({ ...address });
		setCurrentAddressToEdit(address);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalMode(null);
		setCurrentAddressToEdit(null);
		setModalFormData({
			// Reset form data on close
			full_name: "",
			house_no: "",
			house_name: "",
			street: "",
			district: "",
			city: "",
			state: "",
			pincode: "",
			mobile_no: "",
			near_by_landmark: "",
			email: "",
			is_default: false,
			home_or_office: "Home",
		});
	};

	const handleModalInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		setModalFormData((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSaveAddressModal = async () => {
		if (!user?.id) {
			showToast("error", "User not authenticated.");
			return;
		}
		dispatch(showLoader());
		try {
			let response;
			if (modalMode === "add") {
				response = await addUserAddress(modalFormData);
				if (response.success) {
					showToast("success", "New address added successfully.");
					setAddresses([...addresses, response.data]);
					if (response.data.is_default) {
						setSelectedAddressId(response.data.id);
						setAddresses((prevAddresses) =>
							prevAddresses.map((addr) =>
								addr.id === response.data.id
									? { ...addr, is_default: true }
									: { ...addr, default: false }
							)
						);
					} else if (!selectedAddressId && addresses.length === 0) {
						setSelectedAddressId(response.data.id);
					}
					closeModal();
				} else {
					showToast("error", response?.message || "Failed to add new address.");
				}
			} else if (modalMode === "edit" && currentAddressToEdit?.id) {
				response = await updateUserAddress(
					currentAddressToEdit.id,
					modalFormData
				);
				if (response.success) {
					showToast("success", "Address updated successfully.");
					setAddresses((prevAddresses) =>
						prevAddresses.map((addr) =>
							addr.id === currentAddressToEdit.id ? response.data : addr
						)
					);
					if (response.data.is_default) {
						setSelectedAddressId(response.data.id);
						setAddresses((prevAddresses) =>
							prevAddresses.map((addr) =>
								addr.id === response.data.id
									? { ...addr, is_default: true }
									: { ...addr, is_default: false }
							)
						);
					}
					closeModal();
				} else {
					showToast("error", response?.message || "Failed to update address.");
				}
			}
		} catch (error) {
			showToast(
				"error",
				// `Error ${modalMode === "add" ? "adding" : "updating"} address.`
				error?.message || "Error adding/updating address."
			);
		}finally{
			dispatch(hideLoader());
		}
	};

	const handleDeleteAddress = async (addressId) => {
		if (!user?.id || !addressId) {
			showToast("error", "Invalid request to delete address.");
			return;
		}
		if (window.confirm("Are you sure you want to delete this address?")) {
			dispatch(showLoader());
			try {
				const response = await deleteUserAddress(addressId);
				if (response?.success) {
					showToast("success", "Address deleted successfully.");
					setAddresses((prevAddresses) =>
						prevAddresses.filter((addr) => addr.id !== addressId)
					);
					if (selectedAddressId === addressId) {
						setSelectedAddressId(
							addresses.length > 1 ? addresses[0].id : null
						);
					}
				} else {
					showToast("error", response?.message || "Failed to delete address.");
				}
			} catch (error) {
				showToast("error", "Error deleting address.");
			}finally{
				dispatch(hideLoader());
			}
		}
	};

	const handlePlaceOrderNow = async () => {
		if (!selectedAddressId) {
			showToast("error", "Please select a delivery address.");
			return;
		}
		dispatch(showLoader());
		try {
			const response = await placeOrder({
				addressId: selectedAddressId,
				paymentId: "",
				orderId: "",
				paymentSignature: "",
				paymentMethod: "COD",
			});
			console.log(response);

			if (response?.success) {
				showToast("success", response.message);
				dispatch({ type: CLEAR_CART });
				navigate("/order-success"); // Redirect upon successful order
			} else {
				showToast("error", response.message || "Failed to place order.");
			}
		} catch (error) {
			showToast("error", "Error placing order.");
		}finally{
			dispatch(hideLoader());
		}
	};

	const loadRazorpayScript = () => {
		return new Promise((resolve) => {
			if (
				document.querySelector(
					'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
				)
			) {
				resolve(true); // Already loaded
				return;
			}

			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.onload = () => resolve(true);
			script.onerror = () => resolve(false);
			document.body.appendChild(script);
		});
	};
	const handleInitiatePayment = async () => {
		if (selectedPayment === "paynow") {
			if (!selectedAddressId) {
				showToast("warning", "Please select a delivery address.");
				return;
			}

			const razorpayLoaded = await loadRazorpayScript();
			if (!razorpayLoaded) {
				showToast("error", "Failed to load Razorpay SDK.");
				return;
			}
			try {
				dispatch(showLoader());
				const orderResponse = await createRazorpayOrder({
					amount: total * 100,
				});
				console.log('orderResponse',orderResponse);
				if (!orderResponse.success) {
					const errorData = orderResponse.message;
					showToast("error", errorData || "Failed to create payment order.");
					return;
				} else {
					dispatch(hideLoader());
				}

				const orderData = orderResponse.data;

				const options = {
					// key: "rzp_test_sbbCHuQzenmT45", // Replace with your Razorpay Key ID
					key: "rzp_live_RbysBBIyHuSX3N", // live
					amount: orderData.amount,
					currency: "INR",
					orderid: orderData.order_id,
					name: "Label Patola",
					description: "Payment for your order",
					image: "../assets/images/common/logo.png", // Replace with your logo URL
					handler: async (response) => {
						console.log(response);
						if (response?.razorpay_payment_id) {
							// Payment successful, now place the order
							dispatch(showLoader());

							const placeOrderResponse = await placeOrder({
								addressId: selectedAddressId,
								razorpayPaymentId: response.razorpay_payment_id,
								razorpayOrderId: orderData.order_id,
								razorpaySignature: response.razorpay_signature,
								paymentMethod: "Razorpay",
							});

							if (placeOrderResponse?.success) {
								showToast("success", placeOrderResponse.message);
								dispatch({ type: CLEAR_CART });
								navigate("/thankyou"); // Redirect to order confirmation or dashboard
							} else {
								showToast(
									"error",
									placeOrderResponse?.message ||
									"Failed to place order after successful payment."
								);
							}
							dispatch(hideLoader());
						} else {
							showToast("error", "Payment failed or was cancelled.");
							dispatch(hideLoader());
						}
					},
					prefill: {
						name: user?.name || "",
						email: user?.email || "",
						contact:
							addresses.find((addr) => addr.id === selectedAddressId)
								?.phoneNumber || "",
					},
					method: {
						upi: true,       
						card: true,
						netbanking: true,
						wallet: true,
					},
					theme: {
						color: "#3399cc",
					},
				};

				const rzp1 = new window.Razorpay(options);
				rzp1.open();
			} catch (error) {
				console.error("Error initiating payment:", error);
				showToast("error", "Failed to initiate payment.");
			} finally {
				dispatch(hideLoader());
			}
		} else {
			handlePlaceOrderNow(); // For other payment methods
		}
	};

	return (
		<>
			<Header />
			{/*start main content*/}
			<main className="main-content">
				{/* Reactstrap Modal */}
				<Modal
					size="lg"
					show={isModalOpen}
					onHide={closeModal}
					className="address-modal"
				>
					<Modal.Header closeButton>
						<Modal.Title>
							{modalMode === 'add' ? 'Add New Delivery Address' : 'Edit Delivery Address'}
						</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form>
							<Row className="gy-3">
								<Col md={6}>
									<Form.Group controlId="full_name">
										<Form.Label>Full Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Full Name"
											name="full_name"
											value={modalFormData.full_name}
											onChange={handleModalInputChange}
											required
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="mobile_no">
										<Form.Label>Mobile Number</Form.Label>
										<Form.Control
											type="text"
											placeholder="Mobile Number"
											name="mobile_no"
											value={modalFormData.mobile_no}
											onChange={handleModalInputChange}
											required
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="house_no">
										<Form.Label>House Number</Form.Label>
										<Form.Control
											type="text"
											placeholder="House Number"
											name="house_no"
											value={modalFormData.house_no}
											onChange={handleModalInputChange}
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="house_name">
										<Form.Label>House Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="House Name"
											name="house_name"
											value={modalFormData.house_name}
											onChange={handleModalInputChange}
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="street">
										<Form.Label>Street</Form.Label>
										<Form.Control
											type="text"
											placeholder="Street"
											name="street"
											value={modalFormData.street}
											onChange={handleModalInputChange}
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="district">
										<Form.Label>District</Form.Label>
										<Form.Control
											type="text"
											placeholder="District"
											name="district"
											value={modalFormData.district}
											onChange={handleModalInputChange}
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="city">
										<Form.Label>City</Form.Label>
										<Form.Control
											type="text"
											placeholder="City"
											name="city"
											value={modalFormData.city}
											onChange={handleModalInputChange}
											required
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="state">
										<Form.Label>State</Form.Label>
										<Form.Control
											type="text"
											placeholder="State"
											name="state"
											value={modalFormData.state}
											onChange={handleModalInputChange}
											required
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="pincode">
										<Form.Label>Pin Code</Form.Label>
										<Form.Control
											type="text"
											placeholder="Pin Code"
											name="pincode"
											value={modalFormData.pincode}
											onChange={handleModalInputChange}
											required
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="near_by_landmark">
										<Form.Label>Nearby Landmark</Form.Label>
										<Form.Control
											type="text"
											placeholder="Nearby Landmark"
											name="near_by_landmark"
											value={modalFormData.near_by_landmark}
											onChange={handleModalInputChange}
										/>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId="email">
										<Form.Label>Email (Optional)</Form.Label>
										<Form.Control
											type="email"
											placeholder="Email"
											name="email"
											value={modalFormData.email}
											onChange={handleModalInputChange}
										/>
									</Form.Group>
								</Col>

								<Col md={12}>
									<Form.Check
										type="checkbox"
										id="is_default"
										label="Set as default address"
										name="is_default"
										checked={modalFormData.is_default}
										onChange={handleModalInputChange}
									/>
								</Col>

								<Col md={12}>
									<Form.Check
										type="radio"
										id="home"
										label="Home"
										name="home_or_office"
										value="Home"
										checked={modalFormData.home_or_office === 'Home'}
										onChange={handleModalInputChange}
									/>
								</Col>

								<Col md={12}>
									<Form.Check
										type="radio"
										id="office"
										label="Office"
										name="home_or_office"
										value="Office"
										checked={modalFormData.home_or_office === 'Office'}
										onChange={handleModalInputChange}
									/>
								</Col>

								<Col md={6} className="mt-3">
									<Button variant="primary" className="rounded-pill me-2" onClick={handleSaveAddressModal}>
										{modalMode === 'add' ? 'Add Address' : 'Save Changes'}
									</Button>

									<Button variant="secondary" className="rounded-pill" onClick={closeModal}>
										Cancel
									</Button>
								</Col>
							</Row>
						</Form>
					</Modal.Body>
				</Modal>
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
									<a href="javascript:;" className="breadcrumb-link">
										Checkout
									</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />
								</li>
								<li className="breadcrumb-item breadcrumb-active">Checkout</li>
							</ol>
						</nav>
					</div>
				</section>
				{/*end breadcrumb*/}
				<section className="checkout-section py-5">
					<div className="container px-3">
						<div className="row g-4 g-lg-5">
							<div className="col-12 col-lg-6 mt-0">
								<div className="checkout-card">
									<div className="mt-4 checkout-form p-4 border rounded-3">
										{/* <h5 className="mb-4">Fill Your Informaition</h5> */}
										{/*end row*/}
										<div className="row g-4 mb-4" style={{ backgroundColor: "#fff" }}>
											<h6 className="text-lg mb-3">Select Delivery Address</h6>
											{addresses.length > 0 ? (
												addresses.map((address) => (
													<div
														key={address.id}
														className={`border border-gray-200 rounded-8 p-24 mb-16 ${selectedAddressId === address.id ? "border-main-600" : ""
															}`}
													>
														<div className="d-flex justify-content-between align-items-center mb-12 gap-2 py-2">
															<div className="form-check common-check common-radio">
																<input
																	className="form-check-input"
																	type="radio"
																	name="deliveryAddress"
																	id={`address-${address.id}`}
																	value={address.id}
																	checked={selectedAddressId === address.id}
																	onChange={() => handleAddressSelect(address.id)}
																/>
																<label
																	className="form-check-label fw-semibold text-gray-900"
																	htmlFor={`address-${address.id}`}
																>
																	{address.full_name} ({address.home_or_office}){" "}
																	{address.is_default=="Yes" && (
																		<span className="text-sm text-main-600">
																			(Default)
																		</span>
																	)}
																</label>
															</div>
															<div>
																<button
																	color="primary"
																	size="sm"
																	className="btn border border-2 me-1"
																	onClick={() => openEditAddressModal(address)}
																>
																	Edit
																</button>
																<button
																	color="danger"
																	size="sm"
																	className="btn border border-2 text-danger"
																	onClick={() => handleDeleteAddress(address.id)}
																>
																	Delete
																</button>
															</div>
														</div>
														<p className="text-gray-700 mb-8">
															{address.house_no && `${address.house_name}, `}
															{address.street},{" "}
															{address.near_by_landmark && `Near ${address.near_by_landmark}, `}
															{address.city}, {address.state} - {address.pincode}
														</p>
														<p className="text-gray-700">
															Phone: {address.mobile_no}
														</p>
													</div>
												))
											) : (
												<p className="text-gray-500">
													No delivery addresses found. Please add a new one.
												</p>
											)}
											<button
												color="secondary"
												className=" btn btn-dark rounded-pill mt-16"
												onClick={openAddAddressModal}
											>
												Add New Address
											</button>
										</div>
									</div>
									<div className="mt-4 card-payment-method rounded-3 px-4 py-3 border">
										<div className="">
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													name="flexRadioDefault"
													id="flexRadioDefault1"
													checked
												/>
												<label
													className="form-check-label"
													htmlFor="flexRadioDefault1"
												>
													Pay Now
												</label>
											</div>
										</div>
									</div>
									<div className="d-grid mt-4">
										<button
											href="checkout-thankyou.html"
											className="btn btn-dark py-2 rounded-3"
											onClick={handleInitiatePayment}
											disabled={!selectedAddressId}
										>
											Payment
										</button>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="order-summary">
									<div className="cart-list d-flex flex-column gap-4">
										{
											cart.items.map((item) => (
												<>
													<div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
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
																<h5 className="product-name fs-6 mb-1">
																	{item.product.name}
																</h5>
																<p>{item.product_variation?.color?.name} / {item.product_variation?.size?.code}</p>
															</div>
														</div>
														<div className="cart-product-price">
															<h6 className="mb-0">{item.quantity} X ₹{item.product_variation.sale_price}</h6>
														</div>
													</div>
													<div className="my-0 border-1 border-top" />
												</>
											))
										}
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
														aria-label="Recipient's username"
														aria-describedby="button-addon2"
														value={couponCode}
														onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
														disabled={isCouponApplied}
													/>
													{
														isCouponApplied ? (
															<button
																className="btn btn-dark px-3"
																type="button"
																onClick={removeCoupon}
																// disabled={isCouponApplied}
															>
																Remove
															</button>
														): (
															<button
																className="btn btn-dark px-3"
																type="button"
																onClick={applyCoupon}
																// disabled={isCouponApplied}
															>
																Apply
															</button>	
														)
													}
													
												</div>
											</div>
										</div>
									</div>
									<div className="card border-0 rounded-4 bg-light mt-4">
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
												<div className="my-3 border-1 border-top" />
												<div className="d-flex align-items-center justify-content-between mb-3">
													<p className="mb-0 fs-5 fw-semibold">Total</p>
													<p className="mb-0 fs-5 fw-semibold">₹{total}</p>
												</div>
												<div className="text-end mb-3">
                                                <p className="mb-0 fs-6">(Inclusive of all taxes)</p>
                                            </div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*end row*/}
					</div>
				</section>
			</main>
			{/*end main content*/}
			<Footer />
		</>

	);
};

export default Checkout;
