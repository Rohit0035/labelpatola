import React, { useState } from "react";
import { FaCircle, FaRegCircle, FaCheckCircle } from "react-icons/fa";

const OrderTracking = () => {
  const [showTracking, setShowTracking] = useState(false);
  const [orderId, setOrderId] = useState("");

  const steps = [
    { label: "Order Confirmed", date: "Tue, 28th Dec '21 - 1:47 PM", status: "completed" },
    { label: "Shipped", date: "Thu, 30th Dec '21 - 1:30 AM", status: "completed" },
    { label: "Out For Delivery", date: "Thu, 30th Dec '21 - 11:31 AM", status: "pending" },
    { label: "Delivered", date: "Thu, 30th Dec '21 - 4:45 PM", status: "current" },
    { label: "Return", date: "Thu, 31st Dec '21 - 2:23 PM", status: "pending" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId.trim() !== "") {
      setShowTracking(true);
    }
  };

  return (
    <div style={{ padding: "30px", background: "#fff", maxWidth: "500px", margin: "auto" }}>
      {/* Order ID Form */}
      {!showTracking && (
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <h5>Order ID / Tracking Number</h5>
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <br />


          <button type="submit" className='btn btn-dark px-4 py-2 border border-dark flex-fill w-100 mt-4'>Track Order</button>

        </form>
      )}

      {/* Tracking UI */}
      {showTracking && (
        <>
          <div className="d-flex justify-content-between mb-3">
            <h4>Order Status</h4>
            <button
              onClick={() => setShowTracking(false)}
              style={{
                marginBottom: "20px",
                padding: "8px 16px",
                background: "#ccc",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ← Back
            </button>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                position: "relative",
                marginBottom: "40px", // More space between steps
              }}
            >
              {/* Vertical line */}
              {index !== steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "12px",
                    width: "2px",
                    height: "100%",
                    backgroundColor:
                      step.status === "completed" || step.status === "current"
                        ? "green"
                        : "#ccc",
                    zIndex: 0,
                  }}
                ></div>
              )}

              {/* Icon */}
              <div
                style={{
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background:
                    step.status === "completed"
                      ? "white"
                      : step.status === "current"
                        ? "orange"
                        : "#ccc",
                  border:
                    step.status === "completed"
                      ? "2px solid green"
                      : step.status === "current"
                        ? "2px solid orange"
                        : "2px solid #ccc",
                  marginRight: "15px",
                  animation:
                    step.status === "current" ? "pulse 1.5s infinite" : "none",
                }}
              >
                {step.status === "completed" && (
                  <FaCheckCircle size={14} color="green" />
                )}
                {step.status === "current" && (
                  <FaCircle size={10} color="orange" />
                )}
                {step.status === "pending" && (
                  <FaRegCircle size={14} color="#999" />
                )}
              </div>

              {/* Text */}
              <div>
                <strong>{step.label}</strong>
                <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
                  {step.date}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OrderTracking;
