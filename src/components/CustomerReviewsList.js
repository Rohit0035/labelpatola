import React, { useState } from "react";

const reviewsData = [
  {
    name: "Nita Shah",
    verified: true,
    rating: 5,
    review: "Sunflower Summerish Cotton Coord set"
  },
  {
    name: "I.R.",
    verified: false,
    rating: 4,
    review: "Nice collections.. Suitable for summer"
  },
  {
    name: "C...",
    verified: false,
    rating: 5,
    review: "Super quality. Excellent"
  },
  {
    name: "D.S.",
    verified: false,
    rating: 5,
    review:
      "Product is good i have ordered 2 before also i am very much satisfied"
  },
  {
    name: "Mina K.",
    verified: true,
    rating: 3,
    review: "Material is okay, could be better."
  },
  {
    name: "Rina Patel",
    verified: true,
    rating: 5,
    review: "Amazing fit and quality. Loved it!"
  }
];

const sortOptions = [
  "Most Recent",
  "Highest Rating",
  "Lowest Rating",
  "Only Pictures",
  "Pictures First",
  "Videos First",
  "Most Helpful"
];

const CustomerReviewsList = ({ productReviews = [] }) => {
  const [selectedSort, setSelectedSort] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(productReviews.length / reviewsPerPage);
  const indexOfLast = currentPage * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;
  const currentReviews = productReviews.slice(indexOfFirst, indexOfLast);

  return <div className="container my-4">
      {/* Sort Dropdown */}
      <div className="dropdown mb-3">
        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedSort}
          <span>
            <i className="bi bi-caret-down ms-2" />
          </span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {sortOptions.map((option, index) => <li key={index}>
              <button className="dropdown-item" onClick={() => setSelectedSort(option)}>
                {option}
              </button>
            </li>)}
        </ul>
      </div>

      {/* Reviews Grid */}
      <div className="row g-3">
        {currentReviews.map((review, index) =>
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm border-0 h-100 p-3 bg-light">
              {/* Star Rating */}
              <div className="mb-2">
                {[...Array(5)].map((_, i) =>
                  <i
                    key={i}
                    className={`bi ${i < review.rating
                      ? "bi-star-fill text-warning"
                      : "bi-star text-secondary"}`}
                  />
                )}
              </div>

              {/* Reviewer Info */}
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-person-circle fs-4 me-2" />
                <strong>
                  {review?.customer?.full_name}
                </strong>
                {review.verified &&
                  <span
                    className="badge bg-primary ms-2"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Verified
                  </span>}
              </div>

              {/* Review Text */}
              <p className="mb-0 fw-bold">
                {review.title}
              </p>
              <p className="mb-0">
                {review.description.slice(0, 200)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <nav className="mt-4 d-flex justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(
                  prev => Math.max(prev - 1, 1)
                )}>
              Previous
            </button>
          </li>

          {[...Array(totalPages)].map((_, i) =>
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          )}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(
                  prev => Math.min(prev + 1, totalPages)
                )}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>;
};

export default CustomerReviewsList;
