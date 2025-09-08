import React from "react";

export default function BottomSortButton() {
  return (
    <div>
      {/* Sticky Bottom Bar */}
      <div className="position-fixed bottom-0 start-0 end-0 bg-white border-top shadow-sm d-flex justify-content-around p-2">
        <button
          className="btn btn-outline-dark w-50 mx-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sortOffcanvas"
          aria-controls="sortOffcanvas"
        >
          Sort By
        </button>
        <button className="btn btn-outline-dark w-50 mx-2">Filter</button>
      </div>

      {/* Offcanvas Popover (Bottom Drawer) */}
      <div
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="sortOffcanvas"
        aria-labelledby="sortOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sortOffcanvasLabel">
            Sort Options
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small">
          <ul className="list-group">
            <li className="list-group-item">Price: Low to High</li>
            <li className="list-group-item">Price: High to Low</li>
            <li className="list-group-item">Newest First</li>
            <li className="list-group-item">Popularity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
