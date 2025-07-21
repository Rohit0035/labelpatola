import React, { useEffect, useState } from "react";
import { changePassword, updateProfile } from "../../api/userProfileAPI";
import { showToast } from "../ToastifyNotification";

const MyProfile = ({ profileInfo }) => {
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        mobileNo: "",
        passwordEmail: "",
        oldPassword: "",
        newPassword: ""
    });

    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            setProfile({
                fullName: profileInfo?.full_name,
                email: profileInfo?.email,
                mobileNo: profileInfo?.mobile_no,
                passwordEmail: profileInfo?.email,
                oldPassword: "",
                newPassword: ""
            });
        },
        [profileInfo]
    );

    const handleChange = e => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(profile);
        if (profile.fullName.trim() && profile.email.trim() && profile.mobileNo.trim()) {
            const newData = {
                full_name: profile.fullName,
                email: profile.email,
                mobile_no: profile.mobileNo
            };
            try {
                const data = await updateProfile(newData);
                if (data.success) {
                    showToast("success", "Profile updated successfully.");
                }
            } catch (error) {
                console.error("Error updating profile:", error);
            } finally {
                setLoading(false);
            }
        } else {
            showToast("error", "Please fill in all the required fields.");
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        console.log(profile);
        if (profile.oldPassword.trim() && profile.newPassword.trim() && profile.passwordEmail.trim()) {
            const newData = {
                email: profile.passwordEmail,
                current_password: profile.oldPassword,
                new_password: profile.newPassword
            };
            try {
                const data = await changePassword(newData);
                if (data.success) {
                    showToast("success", "Password changed successfully.");
                    setProfile({
                        fullName: profile?.fullName,
                        email: profile?.email,
                        mobileNo: profile?.mobileNo,
                        passwordEmail: profile?.email,
                        oldPassword: "",
                        newPassword: ""
                    });
                }else{
                    showToast("error", data.message);
                }
            } catch (error) {
                console.error("Error updating password :", error);
                showToast("error", "Error changing password.");
            } finally {
                setLoading(false);
            }
        } else {
            showToast("error", "Please fill in all the required fields.");
        }
    };

    return (
        <div className="my-profile">
            <div className="card border-0 rounded-3 bg-light">
                <div className="card-body p-4">
                    <h5 className="mb-4">My Information</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-12 col-lg-6">
                                <label htmlFor="fullName" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control border-2 py-2"
                                    id="fullName"
                                    name="fullName"
                                    value={profile.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-12 col-lg-6">
                                <label htmlFor="email" className="form-label">
                                    Email ID
                                </label>
                                <input
                                    type="email"
                                    className="form-control border-2 py-2"
                                    id="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="mobileNo" className="form-label">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control border-2 py-2"
                                    id="mobileNo"
                                    name="mobileNo"
                                    value={profile.mobileNo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-dark px-4 py-2 mt-5"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>

                    <form onSubmit={handleChangePassword}>
                        <h5 className="mb-4 mt-5">Change Password</h5>
                        <div className="row g-3">
                            <div className="col-12 col-lg-4">
                                <label htmlFor="passwordEmail" className="form-label">
                                    Email ID
                                </label>
                                <input
                                    type="email"
                                    className="form-control border-2 py-2"
                                    id="passwordEmail"
                                    name="passwordEmail"
                                    value={profile.passwordEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-4">
                                <label htmlFor="oldPassword" className="form-label">
                                    Old Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control border-2 py-2"
                                    id="oldPassword"
                                    name="oldPassword"
                                    value={profile.oldPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-4">
                                <label htmlFor="newPassword" className="form-label">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control border-2 py-2"
                                    id="newPassword"
                                    name="newPassword"
                                    value={profile.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-dark px-4 py-2 mt-5"
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
