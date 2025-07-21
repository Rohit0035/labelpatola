import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyProfile from '../components/profile/MyProfile';
import MyOrders from '../components/profile/MyOrders';
import Wishlist from '../components/profile/Wishlist';
import MyReviews from '../components/profile/MyReviews';
import PaymentMethod from '../components/profile/PaymentMethod';
import Address from '../components/profile/Address';
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../reducers/authReducer'
import { useNavigate } from 'react-router-dom';
import { showToast } from '../components/ToastifyNotification';
import { fetchUserProfileData } from '../api/userProfileAPI';
import { hideLoader, showLoader } from '../actions/loaderActions';

const ProfileIndex = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
	const user = useSelector((state) => state.auth?.user);
	const [userProfileData, setUserProfileData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		}
	})

	const getUserProfileData = async () => {
			dispatch(showLoader());
			try {
				const data = await fetchUserProfileData();
				if (data.success) {
					setUserProfileData(data.data);
					console.log(data.data);
				}
			} catch (error) {
				console.error("Error fetching Home Page Data:", error);
			} finally {
				dispatch(hideLoader())
			}
		};
	
		useEffect(() => {
			getUserProfileData();
		}, []);

	const handleLogout = () => {
		// Clear localStorage or other persistent storage
		localStorage.removeItem("isAuthenticated");
		localStorage.removeItem("user");
		localStorage.removeItem("loginTime");

		// Dispatch the logout action
		dispatch({ type: LOGOUT });
		showToast('success', 'Logout successful');
		navigate('/login');
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
										Dashboard
									</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />
								</li>
								<li className="breadcrumb-item breadcrumb-active">Profile</li>
							</ol>
						</nav>
					</div>
				</section>
				{/*end breadcrumb*/}
				{/*start shop*/}
				<section className="py-3 my-account-section">
					<div className="container">
						<div className="row mb-4">
							<div className="col-12">
								<h5 className="mb-3">Welcome, {user?.full_name}</h5>
								<p className="mb-0">Email: {user?.email}</p>
								<p className="mb-0">Mobile: {user?.mobile_no}</p>
							</div>
						</div>
						<div className="row">
							{/* Sidebar */}
							<div className="col-md-3 mb-4">
								<div
									className="nav flex-column nav-pills"
									id="v-pills-tab"
									role="tablist"
									aria-orientation="vertical"
								>
									<button
										className="nav-link active d-flex align-items-center text-black gap-2 st-tabs"
										id="v-pills-orders-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-orders"
										type="button"
										role="tab"
										aria-controls="v-pills-orders"
										aria-selected="true"
									>
										<i className="bi bi-bag" /> My Orders
									</button>

									<button
										className="nav-link d-flex align-items-center text-black gap-2 st-tabs"
										id="v-pills-wishlist-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-wishlist"
										type="button"
										role="tab"
										aria-controls="v-pills-wishlist"
										aria-selected="false"
									>
										<i className="bi bi-heart" /> Wishlist
									</button>

									{/* <button
										className="nav-link d-flex align-items-center text-black gap-2 st-tabs"
										id="v-pills-payment-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-payment"
										type="button"
										role="tab"
										aria-controls="v-pills-payment"
										aria-selected="false"
									>
										<i className="bi bi-credit-card" /> Payment Methods
									</button> */}

									<button
										className="nav-link d-flex align-items-center text-black gap-2 st-tabs"
										id="v-pills-reviews-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-reviews"
										type="button"
										role="tab"
										aria-controls="v-pills-reviews"
										aria-selected="false"
									>
										<i className="bi bi-star" /> My Reviews
									</button>

									<button
										className="nav-link d-flex align-items-center text-black gap-2 st-tabs"
										id="v-pills-profile-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-profile"
										type="button"
										role="tab"
										aria-controls="v-pills-profile"
										aria-selected="false"
									>
										<i className="bi bi-person" /> My Profile
									</button>

									<button
										className="nav-link d-flex align-items-center text-black gap-2 st-tabs"
										id="v-pills-addresses-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-addresses"
										type="button"
										role="tab"
										aria-controls="v-pills-addresses"
										aria-selected="false"
									>
										<i className="bi bi-geo-alt" /> Addresses
									</button>

									<button
										className="nav-link d-flex align-items-center text-black gap-2 st-tabs"
										type="button"
										onClick={() => handleLogout()}
									>
										<i className="bi bi-box-arrow-right" /> Logout
									</button>
								</div>
							</div>

							{/* Main Content */}
							<div className="col-md-9">
								<div className="card p-1 shadow-sm rounded-4">
									<div className="tab-content" id="v-pills-tabContent">
										<div
											className="tab-pane fade show active"
											id="v-pills-orders"
											role="tabpanel"
											aria-labelledby="v-pills-orders-tab"
										>
											<MyOrders orders={userProfileData?.orders}/>
										</div>
										<div
											className="tab-pane fade"
											id="v-pills-wishlist"
											role="tabpanel"
											aria-labelledby="v-pills-wishlist-tab"
										>
											<Wishlist wishlists={userProfileData?.wishlists}/>
										</div>
										<div
											className="tab-pane fade"
											id="v-pills-payment"
											role="tabpanel"
											aria-labelledby="v-pills-payment-tab"
										>
											<PaymentMethod paymentMethods={userProfileData?.paymentMethods}/>
										</div>
										<div
											className="tab-pane fade"
											id="v-pills-reviews"
											role="tabpanel"
											aria-labelledby="v-pills-reviews-tab"
										>
											<MyReviews productReviews={userProfileData?.productReviews} purchasedProducts={userProfileData?.purchasedProducts} />
										</div>
										<div
											className="tab-pane fade"
											id="v-pills-profile"
											role="tabpanel"
											aria-labelledby="v-pills-profile-tab"
										>
											<MyProfile profileInfo={userProfileData?.profileInfo} />
										</div>
										<div
											className="tab-pane fade"
											id="v-pills-addresses"
											role="tabpanel"
											aria-labelledby="v-pills-addresses-tab"
										>
											<Address customerAddresses={userProfileData?.customerAddresses}/>
										</div>
										<div
											className="tab-pane fade"
											id="v-pills-logout"
											role="tabpanel"
											aria-labelledby="v-pills-logout-tab"
										>
											{/* Logout Content */}
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</section>
				{/*end shop*/}
			</main>
			{/*end main content*/}

			<Footer />
		</>

	);
};

export default ProfileIndex;