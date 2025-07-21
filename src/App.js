import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
// import Shop from './pages/Shop';
// import ProductDetail from './pages/ProductDetail';
import Wishlist from "./pages/Whislist";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
// import ThankYou from './pages/ThankYou';

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPass";
import ThankYou from "./pages/ThankYou";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import CancellationReturnExchangePolicy from "./pages/CancellationReturnExchangePolicy";
import ProfileIndex from "./pages/ProfileIndex";
import Contact from "./pages/Contact";
import CartSidebar from "./components/CartSidebar";
import Loader from "./components/Loader";
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
    <BrowserRouter basename="/label-patola">
      <Suspense fallback={<div className="pt-3 text-center" />}>
        <Loader />
        {/* <Header /> */}

        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-detail/:slug" element={<ProductDetail />} />
          {/* 
               
                {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/contact" element={<Contact />} />

          {/* Security pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsandcondition" element={<TermsAndConditions />} />
          <Route path="/shoping-policy" element={<ShippingPolicy />} />
          <Route
            path="/cancel-policy"
            element={<CancellationReturnExchangePolicy />}
          />

          {/* Account section */}
          <Route path="/profile" element={<ProfileIndex />} />
          {/* <Route path="/account/profile" element={<MyProfile />} />
                <Route path="/account/orders" element={<Orders />} />
                <Route path="/account/addresses" element={<Addresses />} />
                <Route path="/account/payment-methods" element={<PaymentMethods />} />
                <Route path="/account/wishlist" element={<AccountWishlist />} /> */}
        </Routes>
        <CartSidebar />
        {/* <Footer /> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
