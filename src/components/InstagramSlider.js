import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import pro1 from "../assets/images/common/pro-1.jpeg";
import pro2 from "../assets/images/common/pro-2.jpeg";
import pro3 from "../assets/images/common/pro-3.jpeg";
import pro4 from "../assets/images/common/pro-4.jpeg";
import pro5 from "../assets/images/common/pro-5.jpeg";
import provd from "../assets/images/common/vd-1.mp4";
import logo from "../assets/images/common/logo.png";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const instagramImages = [
  {
    type: "image",
    src: pro1,
    title: "Look 1",
    description: "Elegant and stylish wear"
  },
  {
    type: "image",
    src: pro2,
    title: "Look 2",
    description: "Perfect for daily wear"
  },
  {
    type: "video",
    src: provd,
    title: "Video Look",
    description: "Trendy new arrival"
  },
  {
    type: "image",
    src: pro4,
    title: "Look 4",
    description: "Bright and colorful"
  },
  { type: "image", src: pro5, title: "Look 5", description: "Classy chic" },
  {
    type: "image",
    src: pro3,
    title: "Look 6",
    description: "Everyday comfort"
  },
  {
    type: "image",
    src: pro3,
    title: "Look 6",
    description: "Everyday comfort"
  },
  {
    type: "image",
    src: pro1,
    title: "Look 1",
    description: "Elegant and stylish wear"
  },
  {
    type: "image",
    src: pro1,
    title: "Look 1",
    description: "Elegant and stylish wear"
  },
  {
    type: "image",
    src: pro1,
    title: "Look 1",
    description: "Elegant and stylish wear"
  },
  {
    type: "image",
    src: pro1,
    title: "Look 1",
    description: "Elegant and stylish wear"
  },
  {
    type: "image",
    src: pro1,
    title: "Look 1",
    description: "Elegant and stylish wear"
  }
];

export default function InstagramGallery({ instagramFeeds = [] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  return (
    <section className="shop-instagram pt-0 pb-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Instragram Feed</h2>
          <hr className="section__heading-line text-black" />
        </div>
        <div className="row g-3 mt-4">
          {instagramFeeds.map((item, index) =>
            <div
              className="col-6 col-md-4 col-lg-2 mt-0"
              style={{ padding: "0.5px" }}
              key={index}
            >
              <Link
                to={`${item.link}`}
                className="text-decoration-none"
                target="_blank"
              >
                <div
                  // className="col-6 col-md-4 col-lg-2 mt-0"
                  style={{ padding: "0.5px" }}
                  // key={index}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{
                      cursor: "pointer",
                      height: "220px"
                    }}
                    // onClick={() => {
                    //   setCurrentIndex(index);
                    //   setOpen(true);
                    // }}
                  >
                    <div className="instagram-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                      <i className="bi bi-instagram fs-3 text-white" />
                    </div>
                    {item.video && item.video != null
                      ? <video
                          loading="lazy"
                          src={`${IMAGE_URL}/${item.video}`}
                          className="img-fluid"
                          muted
                          loop
                          autoPlay
                        />
                      : <img
                          loading="lazy"
                          src={`${IMAGE_URL}/${item.image}`}
                          className="img-fluid w-100 h-100"
                          alt={item.title}
                        />}
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {/* <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={instagramFeeds}
          render={{
            slide: ({ slide }) =>
              <div className="container p-0 p-md-3">
                <div className="">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 bg-light rounded sec-ligh-tbx">
                      <div className="row">
                        
                        <div className="col-md-6 mb-3 mb-md-0 p-0 d-flex align-items-center justify-content-center">
                          {slide.video
                            ? <video
                                src={`${IMAGE_URL}/${slide.video}`}
                                controls
                                loop
                                muted
                                autoPlay
                                className="w-100 rounded"
                              />:<img
                                src={`${IMAGE_URL}/${slide.image}`}
                                alt={slide.title}
                                className="img-fluid rounded"
                              />
                            }
                        </div>

                        
                        <div className="col-md-6 d-flex flex-column justify-content-top">
                          <div className="py-3 px-2">
                            <div className="d-flex">
                              <img
                                src={logo}
                                alt="logo"
                                style={{ width: "40px" }}
                              />
                              <h5 className="text-black mt-2 ms-2">
                                <b>The Label Patola</b>
                              </h5>
                            </div>
                            <hr className="my-2 text-secondary" />
                            <p className="mt-4 fw-bold">
                              {slide.title}
                            </p>
                            <p className="mt-1">
                              
                              <div
                                  className="prose"
                                  dangerouslySetInnerHTML={{ __html: slide?.description }}
                              />
                            </p>
                            <button
                              className="btn btn-dark rounded-5 w-50 st-mb-cart btn-sm"
                              onClick={() =>
                                dispatch(
                                  addToCart(
                                    slide.product,
                                    slide.product?.product_variations?.[0],
                                    1
                                  )
                                )}
                            >
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }}
        /> */}
      </div>
    </section>
  );
}
