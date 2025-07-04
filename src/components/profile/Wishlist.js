import React from 'react';
import pro1 from '../../assets/images/common/pro-1.jpeg';
import pro2 from '../../assets/images/common/pro-2.jpeg';
import pro3 from '../../assets/images/common/pro-3.jpeg';
import pro4 from '../../assets/images/common/pro-4.jpeg';
import pro5 from '../../assets/images/common/pro-5.jpeg';
import pro6 from '../../assets/images/common/pro-6.jpeg';
const wishlistItems = [
    {
        id: 1,
        image: pro6,
        name: 'Grey Venish Pant',
        originalPrice: '$698',
        discountedPrice: '$499'
    },
    {
        id: 2,
        image: pro4,
        name: 'Grey Venish Pant',
        originalPrice: '$698',
        discountedPrice: '$499'
    },
    {
        id: 3,
        image: pro1,
        name: 'Grey Venish Pant',
        originalPrice: '$698',
        discountedPrice: '$499'
    },
    {
        id: 4,
        image: pro2,
        name: 'Grey Venish Pant',
        originalPrice: '$698',
        discountedPrice: '$499'
    },
    {
        id: 5,
        image: pro1,
        name: 'Grey Venish Pant',
        originalPrice: '$698',
        discountedPrice: '$499'
    },

];

const Wishlist = () => {
    return (
        <div className="shop-wishlist p-2">
            <h5 className="mb-4">My Wishlist</h5>
            <hr />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 g-4">
                {wishlistItems.map((item) => (
                    <div className="col" key={item.id}>
                        <div className="wishlist-card">
                            <div className="position-relative">
                                <button
                                    type="button"
                                    className="btn btn-outline-dark border btn-wishlist-delete position-absolute top-0 end-0 m-3"
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                                <img
                                    src={item.image}
                                    className="rounded-3 img-fluid product-img"
                                    alt={item.name}
                                />
                            </div>
                            <div className="mt-3">
                                <h6 className="product-name mb-1">{item.name}</h6>
                                <p className="mb-0 product-price d-flex align-items-center gap-2">
                                    <span className="prev-price text-decoration-line-through">{item.originalPrice}</span>
                                    {item.discountedPrice}
                                </p>
                            </div>
                            <div className="d-grid mt-3">
                                <a
                                    href="javascript:;"
                                    className="btn btn-dark rounded-3 d-flex align-items-center justify-content-center gap-2 py-2"
                                >
                                    <i className="bi bi-basket2"></i>
                                    <span>Add to Cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
