import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <section className="pb-5 product-details">
      <div className="container px-3">
        <div className="row g-4 g-lg-5">
          {/* Image skeleton */}
          <div className="col-12 col-lg-6">
            <div className="placeholder-glow">
              <div
                className="placeholder w-100 rounded"
                style={{ height: "420px" }}
              />

              <div className="d-flex gap-2 mt-3">
                {[1, 2, 3, 4, 5].map(i =>
                  <div
                    key={i}
                    className="placeholder rounded"
                    style={{ width: "70px", height: "70px" }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="col-12 col-lg-6">
            <div className="placeholder-glow">
              <span className="placeholder col-4 mb-2" />

              <h2>
                <span className="placeholder col-8" />
              </h2>

              <p className="placeholder col-6" />

              <h3 className="placeholder col-4" />

              <p className="placeholder col-12" />
              <p className="placeholder col-10" />

              <div className="d-flex gap-2 mt-3">
                {[1, 2, 3].map(i =>
                  <span
                    key={i}
                    className="placeholder rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  />
                )}
              </div>

              <div className="mt-4">
                <span className="placeholder col-3" />
                <span className="placeholder col-5 ms-2" />
              </div>

              <div className="mt-4">
                <span className="placeholder col-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
