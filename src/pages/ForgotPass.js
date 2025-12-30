import React, { useState } from 'react';
import Logo from '../assets/images/common/favicon.jpg';
import Authimg from '../assets/images/common/auth-img.png';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../components/ToastifyNotification';
import { sendVerifyOtp } from '../api/authAPI';

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      showToast('error', 'Email is required');
      return;
    }

    try {
      setLoading(true);
      const res = await sendVerifyOtp(email);
      if (res.success) {
        showToast('success', res.message);
        setOtpSent(true);
      } else {
        showToast('error', res.message);
      }
    } catch {
      showToast('error', 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      showToast('error', 'OTP is required');
      return;
    }

    try {
      setLoading(true);
      const res = await sendVerifyOtp(email, otp);
      if (res.success) {
        showToast('success', 'OTP verified');
        navigate('/reset-password', { state: { email, otp } });
      } else {
        showToast('error', res.message);
      }
    } catch {
      showToast('error', 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="main-content">
        <section className="py-5" style={{ backgroundColor: "#bed7fa" }}>
          <div className="container px-3">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-12 col-xl-6">
                <div className="auth-register p-4 p-sm-5 rounded-3 border bg-white">
                  
                  <div className="text-center mb-4">
                    <Link to="/">
                      <img src={Logo} width="90px" alt="Logo" />
                    </Link>
                  </div>

                  <h4 className="mb-0">Forgot Password</h4>
                  <p>
                    {otpSent
                      ? 'Enter the OTP sent to your email'
                      : 'Enter your registered email ID to reset the password'}
                  </p>

                  <div className="form-body mt-5">
                    <div className="row row-cols-1 g-3">

                      {/* EMAIL FIELD */}
                      <div className="col">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control form-control-lg border-2"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={otpSent}
                        />
                      </div>

                      {/* OTP FIELD (Only After OTP Sent) */}
                      {otpSent && (
                        <div className="col">
                          <label className="form-label">OTP</label>
                          <input
                            type="text"
                            className="form-control form-control-lg border-2"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                      )}

                      {/* BUTTONS */}
                      <div className="col">
                        <div className="d-grid gap-3">

                          {!otpSent ? (
                            <button
                              onClick={handleSendOtp}
                              className="btn btn-dark btn-lg px-4 rounded-3"
                              disabled={loading}
                            >
                              <span className="fs-6">
                                {loading ? 'Sending...' : 'Send'}
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={handleVerifyOtp}
                              className="btn btn-dark btn-lg px-4 rounded-3"
                              disabled={loading}
                            >
                              <span className="fs-6">
                                {loading ? 'Verifying...' : 'Verify'}
                              </span>
                            </button>
                          )}

                          <Link
                            to="/login"
                            className="btn btn-outline-dark border btn-lg px-4 rounded-3"
                          >
                            <span className="fs-6">Back to login</span>
                          </Link>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <div className="col-12 col-xl-6 d-none d-xl-flex">
                <div className="auth-register-img">
                  <img src={Authimg} className="img-fluid" width={650} alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForgotPass;
