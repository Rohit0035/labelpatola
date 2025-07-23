import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserAddress, deleteUserAddress, updateUserAddress } from '../../api/addressAPI';
import { showToast } from '../ToastifyNotification';
import {
    Modal,
    Button,
    Form,
    Row,
    Col
} from 'react-bootstrap';

const Address = ({ customerAddresses = [] }) => {
    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        if (customerAddresses && customerAddresses.length > 0){
            setAddresses(customerAddresses)
        }
    }, [customerAddresses])

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
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
    const user = useSelector((state) => state.auth?.user);



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

        try {
            let response;
            if (modalMode === "add") {
                response = await addUserAddress(modalFormData);
                if (response.success) {
                    showToast("success", "New address added successfully.");
                    setAddresses([...addresses, response.data]);
                    if (response.data.is_default == "Yes") {
                        setAddresses((prevAddresses) =>
                            prevAddresses.map((addr) =>
                                addr.id === response.data.id
                                    ? { ...addr, is_default: "Yes" }
                                    : { ...addr, is_default: "No" }
                            )
                        );
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
        }
    };

    const handleDeleteAddress = async (addressId) => {
        if (!user?.id || !addressId) {
            showToast("error", "Invalid request to delete address.");
            return;
        }
        if (window.confirm("Are you sure you want to delete this address?")) {
            try {
                const response = await deleteUserAddress(addressId);
                if (response?.success) {
                    showToast("success", "Address deleted successfully.");
                    setAddresses((prevAddresses) =>
                        prevAddresses.filter((addr) => addr.id !== addressId)
                    );
                } else {
                    showToast("error", response?.message || "Failed to delete address.");
                }
            } catch (error) {
                showToast("error", "Error deleting address.");
            }
        }
    };


    return (
        <>
            {/*start main content*/}
            <main className="main-content">
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
                                        checked={modalFormData.is_default === 'Yes'}
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
                {/*start shop*/}
                <section className="py-5 my-account-section">
                    <div className="container px-3">
                        <div className="row g-lg-4">
                            <div className="col-12 col-lg-12">
                                <div className="my-profile">
                                    <h4 className="mb-4">My Addresses</h4>
                                    {
                                        addresses.length > 0 ? addresses.map((address, index) => (
                                            <div className="card rounded-3 border my-4" key={index}>
                                                <div className="card-body p-4">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <h5 className="mb-0">{address.home_or_office}</h5>
                                                        <span className="badge rounded-5 bg-dark">{address.is_default=="Yes" ? "Default" : ""}</span>
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
                                                    <div className="mt-3">
                                                        <address className="mb-0">
                                                            {address.house_no}, {address.house_name},{address.street}<br />
                                                            {address.city}, {address.state} {address.pincode}
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        )): <h5>No Address found</h5>
                                    }
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-dark border-2 border rounded-3 px-4"
                                            // data-bs-toggle="modal"
                                            // data-bs-target="#AddNewAddressModal"
                                            onClick={openAddAddressModal}
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