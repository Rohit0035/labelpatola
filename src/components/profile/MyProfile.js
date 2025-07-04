import React, { useState } from 'react';

const MyProfile = () => {
    const [profile, setProfile] = useState({
        firstName: 'Jhon',
        lastName: 'Michle',
        email: 'jhon@xyz.com',
        phone: '+91-991016XXX',
        address: '',
        passwordEmail: '',
        oldPassword: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Profile Data:', profile);
        alert('Profile changes saved!');
    };

    return (
        <div className="my-profile">
            <div className="card border-0 rounded-3 bg-light">
                <div className="card-body p-4">
                    <h5 className="mb-4">My Information</h5>
                    <form>
                        <div className="row g-3">
                            <div className="col-12 col-lg-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control border-2 py-2"
                                    id="firstName"
                                    name="firstName"
                                    value={profile.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control border-2 py-2"
                                    id="lastName"
                                    name="lastName"
                                    value={profile.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="email" className="form-label">Email ID</label>
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
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control border-2 py-2"
                                    id="phone"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control border-2 py-2"
                                    id="address"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <h5 className="mb-4 mt-5">Change Password</h5>

                        <div className="row g-3">
                            <div className="col-12 col-lg-4">
                                <label htmlFor="passwordEmail" className="form-label">Email ID</label>
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
                                <label htmlFor="oldPassword" className="form-label">Old Password</label>
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
                                <label htmlFor="newPassword" className="form-label">New Password</label>
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
                                    type="button"
                                    className="btn btn-dark px-4 py-2 mt-5"
                                    onClick={handleSubmit}
                                >
                                    Save Changes
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
