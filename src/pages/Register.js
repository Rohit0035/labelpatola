import React, { use, useState } from 'react';
import Logo from '../assets/images/common/favicon.jpg'
import Authimg from '../assets/images/common/auth-img.png'
import { useNavigate } from 'react-router-dom';
import { registration } from '../api/registrationAPI';
import { useDispatch } from 'react-redux';
import { showToast } from '../components/ToastifyNotification';
import { LOGIN_SUCCESS } from '../reducers/authReducer';
import { syncCartWithDatabase } from '../actions/cartActions';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const [errors, setErrors] = useState({});

    // Validation Function
    const validateInputs = () => {
        const errors = {};
        if (!fullName.trim()) {
            errors.name = 'Full name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Enter a valid email address';
        }
        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Enter a password with at least 6 characters';
        }

        if(password !== confirmPassword){
            errors.confirmPassword = 'Password does not match'
        }
        return errors;
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Validate inputs
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const data = {
                full_name:fullName,
                email,
                password,
                password_confirmation:confirmPassword
            }
            const response = await registration(data); // Backend API call
            if (response.success === true) {
                showToast('success', response.message);
                dispatch({ type: LOGIN_SUCCESS, payload: { response } }); 

                dispatch(syncCartWithDatabase());

                navigate('/profile');
            } else {
                showToast('error', response.message);
            }
        } catch (error) {
            showToast('error', error.message || 'Registration failed');
        }
    };

    return (
        <>
            {/*start main content*/}
            <main className="main-content">
                <section className="py-5" style={{ backgroundColor: "#bed7fa" }}>
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-xl-6">
                                <div className="auth-register p-4 p-sm-5 rounded-3 border bg-white">
                                    <div className="text-center mb-2">
                                        <a href="/">
                                            <img src={Logo} width="90px" />
                                        </a>
                                    </div>
                                    <h4 className="mb-0">Create an account</h4>
                                    <p>
                                        I already have an account{" "}
                                        <a
                                            href="/login"
                                            className="text-decoration-underline link-body-emphasis"
                                        >
                                            Sign In
                                        </a>
                                    </p>
                                    <div className="form-body mt-2">
                                        <form onSubmit={handleRegistration}>
                                            <div className="row row-cols-1 g-3">
                                                <div className="col">
                                                    <label htmlFor="EmailAddress" className="form-label">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg border-2"
                                                        id="fullname"
                                                        value={fullName}
                                                        onChange={(e) => setFullName(e.target.value)}
                                                    />
                                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="EmailAddress" className="form-label">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg border-2"
                                                        id="EmailAddress"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="inputChoosePassword" className="form-label">
                                                        Password
                                                    </label>
                                                    <div className="input-group" id="show_hide_password">
                                                        <input
                                                            type={showPassword ? "text" : "password"}
                                                            className="form-control form-control-lg border-end-0"
                                                            id="inputChoosePassword"
                                                            placeholder="Enter Password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="input-group-text bg-transparent"
                                                        >
                                                            <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} />
                                                        </button>
                                                        {errors.password && (
                                                            <div className="text-danger">{errors.password}</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="ConfirmPassword" className="form-label">
                                                        Confirm Password
                                                    </label>
                                                    <div
                                                        className="input-group"
                                                        id="show_hide_password_confirm"
                                                    >
                                                        <input
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            className="form-control form-control-lg border-end-0"
                                                            id="ConfirmPassword"
                                                            placeholder="Enter Password"
                                                            value={confirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                        <button
                                                            type="button"
                                                            className="input-group-text bg-transparent"
                                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        >
                                                            <i className={showConfirmPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} />
                                                        </button>
                                                        {errors.confirmPassword && (
                                                            <div className="text-danger">
                                                                {errors.confirmPassword}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* <div className="col">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckChecked"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckChecked"
                                                        >
                                                            I agree to the User
                                                        </label>
                                                    </div>
                                                </div> */}
                                                <div className="col">
                                                    <div className="d-grid">
                                                        <button
                                                            className="btn btn-dark btn-lg px-4 rounded-3"
                                                        >
                                                            <span className="fs-6">Create an account</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {/*end row*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 d-none d-xl-flex">
                                <div className="auth-register-img">
                                    <img
                                        src={Authimg}
                                        className="img-fluid"
                                        width={650}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
            </main>
            {/*end main content*/}
        </>

    );
};

export default Register;
