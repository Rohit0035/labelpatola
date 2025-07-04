import React from 'react';

const Address = () => {
    return (
        <>
            {/*start main content*/}
            <main className="main-content">
                {/*start shop*/}
                <section className="py-5 my-account-section">
                    <div className="container px-3">
                        <div className="row g-lg-4">
                            <div className="col-12 col-lg-12">
                                <div className="my-profile">
                                    <h4 className="mb-4">My Addresses</h4>
                                    <div className="card rounded-3 border">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <h5 className="mb-0">Home</h5>
                                                <span className="badge rounded-5 bg-dark">Primary</span>
                                            </div>
                                            <div className="mt-3">
                                                <address className="mb-0">
                                                    47-A, Link Road New York <br />
                                                    United Kingdom, 201001
                                                </address>
                                            </div>
                                            <div className="mt-3 d-flex align-items-center gap-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-dark px-4 rounded-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#EditAddressModal"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger px-4 rounded-3"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card rounded-3 border mt-4">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <h5 className="mb-0">Home</h5>
                                                <span className="badge rounded-5 bg-dark">Primary</span>
                                            </div>
                                            <div className="mt-3">
                                                <address className="mb-0">
                                                    47-A, Link Road New York <br />
                                                    United Kingdom, 201001
                                                </address>
                                            </div>
                                            <div className="mt-3 d-flex align-items-center gap-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-dark px-4 rounded-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#EditAddressModal"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger px-4 rounded-3"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-dark border-2 border rounded-3 px-4"
                                            data-bs-toggle="modal"
                                            data-bs-target="#AddNewAddressModal"
                                        >
                                            <i className="bi bi-plus-lg me-2" />
                                            Add new Address
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
                {/*end shop*/}
                {/* Edit address Modal */}
                <div
                    className="modal fade"
                    id="EditAddressModal"
                    tabIndex={-1}
                    aria-labelledby="EditAddressModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header px-4">
                                <h1 className="modal-title fs-5" id="EditAddressModalLabel">
                                    Edit Address
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body p-4">
                                <div className="">
                                    <h6 className="fw-semibold mb-3">Contact Details</h6>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingName2"
                                            defaultValue="Jhon Deo"
                                        />
                                        <label htmlFor="floatingName2">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingMobileNo2"
                                            defaultValue="99-xxxxxxxxxx"
                                        />
                                        <label htmlFor="floatingMobileNo2">Mobile No</label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h6 className="fw-semibold mb-3">Address</h6>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingPinCode2"
                                            defaultValue={201001}
                                        />
                                        <label htmlFor="floatingPinCode2">Pin Code</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingAddress2"
                                            defaultValue="85-B, UAE Road"
                                        />
                                        <label htmlFor="floatingAddress2">Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingLocalityTown2"
                                            defaultValue="Street Name"
                                        />
                                        <label htmlFor="floatingLocalityTown2">Locality / Town</label>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingCity2"
                                                    defaultValue="Dubai"
                                                />
                                                <label htmlFor="floatingAddress2">City / District</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingState2"
                                                    defaultValue="United Arabia"
                                                />
                                                <label htmlFor="floatingState2">State</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer px-4">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-dark">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Edit address Modal */}
                {/* Add New address Modal */}
                <div className="modal fade" id="AddNewAddressModal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header px-4">
                                <h1 className="modal-title fs-5">Add New Address</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body p-4">
                                <div className="">
                                    <h6 className="fw-bold mb-3">Contact Details</h6>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingName" />
                                        <label htmlFor="floatingName">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingMobileNo"
                                        />
                                        <label htmlFor="floatingMobileNo">Mobile No</label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h6 className="fw-bold mb-3">Address</h6>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingPinCode"
                                        />
                                        <label htmlFor="floatingPinCode">Pin Code</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingAddress"
                                        />
                                        <label htmlFor="floatingAddress">Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingLocalityTown"
                                        />
                                        <label htmlFor="floatingLocalityTown">Locality / Town</label>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingCity"
                                                />
                                                <label htmlFor="floatingAddress">City / District</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingState"
                                                />
                                                <label htmlFor="floatingState">State</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer px-4">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-dark">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add New address Modal */}
            </main>
            {/*end main content*/}
        </>

    );
};

export default Address;