// QuickBuySidebar.jsx
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import pro1 from '../assets/images/common/pro-1.jpeg';
import SizeModal from "./SizeModal";

function QuickBuySidebar({ isOpen, onClose }) {


    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle function
    const toggleModal = () => setIsModalOpen((prev) => !prev);


    // increment & decrement
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <>
            {/* Sidebar */}
            <div
                className={classNames("offcanvas offcanvas-end", { show: isOpen })}
                tabIndex="-1"
                ref={sidebarRef}
                style={{
                    visibility: isOpen ? "visible" : "hidden",
                    backgroundColor: "#fff",
                    zIndex: 1055,
                }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Quick Buy</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>

                <div className="offcanvas-body d-flex flex-column justify-content-between">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={pro1} alt="product-img" className="w-100 rounded" height="150px" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="price-box">
                                <h4 className="fs-5">'Amisha' Velvet Hand Embroidered Pant Set</h4>
                                <p className="fs-6">₹ 4,295.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <i className="bi bi-dot text-primary fs-5 pulse-dot mt-3"></i> <span>Only <b>1</b> left in stock</span>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex justify-content-between mb-2">
                            <p className="mb-0">Size</p>
                            <p className="mb-0">
                                <Link
                                    onClick={toggleModal}
                                >
                                    Size Guide
                                </Link>
                            </p>
                        </div>
                        <div className="product-size-list d-flex align-items-center gap-3">
                            <div className="product-size-list-item">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="options-size"
                                    id="size-option1"
                                />
                                <label
                                    className="btn btn-outline-dark btn-product-size"
                                    htmlFor="size-option1"
                                >
                                    S
                                </label>
                            </div>
                            <div className="product-size-list-item">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="options-size"
                                    id="size-option2"
                                />
                                <label
                                    className="btn btn-outline-dark btn-product-size"
                                    htmlFor="size-option2"
                                >
                                    M
                                </label>
                            </div>
                            <div className="product-size-list-item">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="options-size"
                                    id="size-option3"
                                />
                                <label
                                    className="btn btn-outline-dark btn-product-size"
                                    htmlFor="size-option3"
                                >
                                    L
                                </label>
                            </div>
                            <div className="product-size-list-item">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="options-size"
                                    id="size-option4"
                                />
                                <label
                                    className="btn btn-outline-dark btn-product-size"
                                    htmlFor="size-option4"
                                >
                                    XL
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="product-quantity mt-3">
                        <p className="mb-2">Quantity</p>
                        <div className="input-group input-group-lg">
                            {/* Decrement Button */}
                            <button
                                className="btn border border-2 border-end-0"
                                type="button"
                                onClick={decrementQuantity}
                            >
                                <i className="bi bi-dash" />
                            </button>

                            {/* Quantity Input */}
                            <input
                                type="number"
                                className="form-control border-2 text-center"
                                min={1}
                                value={quantity}
                                readOnly
                                name="quantity"
                            />

                            {/* Increment Button */}
                            <button
                                className="btn border border-2 border-start-0"
                                type="button"
                                onClick={incrementQuantity}
                            >
                                <i className="bi bi-plus" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="overflow-auto" style={{height:'60px'}}>
                            Featuring intricate 'zardozi' and pearl handwork on a rich velvet base, paired with a beautifully.
                        </p>
                    </div>

                    <div className="row mt-3">
                        <div className="col-6 mb-2">
                            <Link to="/cart" className="btn btn-light border px-4 py-2 flex-fill me-2 w-100" href="/cart">View Cart</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/" className="btn btn-dark border px-4 py-2 flex-fill  w-100" href="/cart">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={onClose}
                    style={{ zIndex: 1050 }}
                />
            )}

            <SizeModal isOpen={isModalOpen} toggleModal={toggleModal} />

        </>
    );
}

export default QuickBuySidebar;
