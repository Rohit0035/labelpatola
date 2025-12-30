import React, { useState } from 'react';
import Logo from '../assets/images/common/favicon.jpg';
import Authimg from '../assets/images/common/auth-img.png';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { resetPassword } from '../api/authAPI';
import { showToast } from '../components/ToastifyNotification';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { email, otp } = state || {};

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      showToast('error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      showToast('error', 'Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await resetPassword(email, password);
      if (res.success) {
        showToast('success', 'Password changed successfully');
        navigate('/login');
      } else {
        showToast('error', res.message);
      }
    } catch {
      showToast('error', 'Password reset failed');
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

                  <h4 className="mb-0">Reset Password</h4>
                  <p>Enter your new password</p>

                  <div className="form-body mt-5">
                    <div className="row row-cols-1 g-3">
                      <div className="col">
                        <label className="form-label">New Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg border-2"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="col">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg border-2"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>

                      <div className="col">
                        <div className="d-grid gap-3">
                          <button
                            onClick={handleResetPassword}
                            className="btn btn-dark btn-lg px-4 rounded-3"
                            disabled={loading}
                          >
                            <span className="fs-6">
                              {loading ? 'Updating...' : 'Change Password'}
                            </span>
                          </button>

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

export default ResetPassword;
