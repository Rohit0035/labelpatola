import React from "react";
import { IMAGE_URL } from "../../utils/api-config";

const orders = [
  {
    orderId: "PG65329",
    date: "Jan 14, 2025",
    status: "In progress",
    statusColor: "primary",
    total: "$134.24",
    product: {
      image: "assets/images/gallery/categories/01.png",
      name: "Light Blue Shirt",
      qty: 1
    }
  },
  {
    orderId: "KR69453",
    date: "Jan 18, 2025",
    status: "Delivered",
    statusColor: "success",
    total: "$498.82",
    product: {
      image: "assets/images/gallery/categories/02.png",
      name: "Blue Shirt",
      qty: 2
    }
  },
  {
    orderId: "AH85479",
    date: "Jan 22, 2025",
    status: "Canceled",
    statusColor: "danger",
    total: "$187.56",
    product: {
      image: "assets/images/gallery/categories/03.png",
      name: "Formal Pants",
      qty: 1
    }
  },
  {
    orderId: "DR63257",
    date: "Jan 26, 2025",
    status: "Delivered",
    statusColor: "success",
    total: "$389.14",
    product: {
      image: "assets/images/gallery/categories/04.png",
      name: "High Heals",
      qty: 3
    }
  },
  {
    orderId: "OG45726",
    date: "Jan 28, 2025",
    status: "Canceled",
    statusColor: "danger",
    total: "$179.43",
    product: {
      image: "assets/images/gallery/categories/05.png",
      name: "Golden Watch",
      qty: 1
    }
  },
  {
    orderId: "OL96325",
    date: "Jan 30, 2025",
    status: "In progress",
    statusColor: "primary",
    total: "$235.47",
    product: {
      image: "assets/images/gallery/categories/06.png",
      name: "Sports Shoes",
      qty: 2
    }
  }
];

const MyOrders = ({ orders = [] }) => {
  return (
    <div className="my-orders border rounded-3 p-3">
      <h5 className="mb-4">My Order</h5>
      <hr />
      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Order#</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0
              ? orders.map((order, index) =>
                  <tr key={index}>
                    <td>
                      {order.order_id}
                    </td>
                    <td>
                      {order.created_at}
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <i
                          className={`bi bi-circle-fill text-${order.status ==
                          "Pending"
                            ? "warning"
                            : "success"} font-12`}
                        />
                        {order.status}
                      </span>
                    </td>
                    <td>
                      {order.total}
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        {order.order_rows.map((orderRow, index) =>
                          <p>
                            <img
                              key={index}
                              src={`${IMAGE_URL}/${orderRow.product
                                .feature_image}`}
                              width="60"
                              height="60"
                              className="rounded-circle"
                              alt={orderRow.product.name}
                            />
                            <div>
                              <p className="mb-0 fw-semibold">
                                {orderRow.product.name}
                              </p>
                              <p className="mb-0">
                                Qty x {orderRow.quantity}
                              </p>
                            </div>
                          </p>
                        )}
                        {/* <img
                      src={`${IMAGE_URL}/${order.order_rows?.[0]?.product.feature_image}`}
                      width="60"
                      height="60"
                      className="rounded-circle"
                      alt={order.order_rows?.[0]?.product.name}
                    />
                    <div>
                      <p className="mb-0 fw-semibold">
                        {order.order_rows?.[0]?.product.name}
                      </p>
                      <p className="mb-0">
                        Qty x {order.order_rows?.[0]?.quantity}
                      </p>
                    </div> */}
                      </div>
                    </td>
                  </tr>
                )
              : <tr>
                  <td colSpan={5}>No orders found</td>
                </tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
