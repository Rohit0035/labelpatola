import React from "react";
import { IMAGE_URL } from "../../utils/api-config";

const MyOrders = ({ orders = [] }) => {
  return (
    <div className="my-orders border rounded-3 p-3">
      <h5 className="mb-4">My Orders</h5>
      <hr />

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>S.No</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total Qty</th>
              <th>Total Amount</th>
              <th>Payment ID</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order, orderIndex) => (
                <React.Fragment key={orderIndex}>
                  {/* ================= MAIN ORDER ROW ================= */}
                  <tr className="table-info">
                    <td>{orderIndex + 1}</td>
                    <td>{order.order_id}</td>
                    <td>{order.created_at.split("T")[0]}</td>
                    <td>
                      {order.order_rows.reduce(
                        (sum, row) => sum + parseInt(row.quantity),
                        0
                      )}
                    </td>
                    <td>₹{order.total}</td>
                    <td>{order.razorpay_payment_id}</td>
                  </tr>

                  {/* ================= ORDER ITEMS ROW ================= */}
                  <tr>
                    <td colSpan="6">
                      <table className="table table-bordered mb-0">
                        <thead className="table-light">
                          <tr>
                            <th colSpan="6">Order Items</th>
                          </tr>
                          <tr>
                            <th>S.No</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {order.order_rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              <td>{rowIndex + 1}</td>

                              <td>
                                <img
                                  src={`${IMAGE_URL}/${row.product?.feature_image}`}
                                  width="50"
                                  height="50"
                                  alt={row.product?.name}
                                />
                              </td>

                              <td>
                                {row.product?.name},{" "}
                                {row.product_variation?.color?.name},{" "}
                                {row.product_variation?.size?.code}
                              </td>

                              <td>₹{row.sale_price}</td>

                              <td>{parseInt(row.quantity || 0)}</td>

                              <td>
                                <span
                                  className={`badge bg-${
                                    row.status === "Pending"
                                      ? "warning"
                                      : "success"
                                  }`}
                                >
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
