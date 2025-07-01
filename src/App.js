import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
// import Shop from './pages/Shop';
// import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Whislist';
// import ShoppingCart from './pages/ShoppingCart';
// import Checkout from './pages/Checkout';
// import ThankYou from './pages/ThankYou';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPass';
// import Review from './pages/Review';

// Account pages
// import MyProfile from './pages/Account/MyProfile';
// import Orders from './pages/Account/Orders';
// import Addresses from './pages/Account/Addresses';
// import PaymentMethods from './pages/Account/PaymentMethods';
// import AccountWishlist from './pages/Account/Wishlist';

// Components
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
    return (
        <Router>
            {/* <Header /> */}

            <Routes>
                {/* Main pages */}
                <Route path="/" element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                {/* <Route path="/shop" element={<Shop />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/thank-you" element={<ThankYou />} /> */}

                {/* Auth pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpass" element={<ForgotPassword />} />
                {/* <Route path="/review" element={<Review />} /> */}

                {/* Account section */}
                {/* <Route path="/account/profile" element={<MyProfile />} />
                <Route path="/account/orders" element={<Orders />} />
                <Route path="/account/addresses" element={<Addresses />} />
                <Route path="/account/payment-methods" element={<PaymentMethods />} />
                <Route path="/account/wishlist" element={<AccountWishlist />} /> */}
            </Routes>

            {/* <Footer /> */}
        </Router>
    );
}

export default App;
