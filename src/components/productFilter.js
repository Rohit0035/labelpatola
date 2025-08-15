import React, { useState, useEffect } from 'react';
import { fetchFilters } from '../api/productAPI';

function ProductFilters({ onFilterChange }) {
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFilters = async () => {
        try {
            const data = await fetchFilters();
            if (data.success) {
                setFilters(data.data);
                console.log(data.data);
            }
        } catch (error) {
            console.error("Error fetching Filters:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFilters();
    }, []);

    // Initialize filter state to store IDs
    const [selectedFilters, setSelectedFilters] = useState({
        categories: [],
        sizes: [],
        colors: [],
        availability: [],
        priceRange: { min: 0, max: 10000 },
    });

    // Effect to call onFilterChange whenever selectedFilters changes
    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters]);

    // Modified handlers to use item.id instead of item.name
    const handleCategoryChange = (categoryId) => {
        setSelectedFilters((prevFilters) => {
            const updatedCategories = prevFilters.categories.includes(categoryId)
                ? prevFilters.categories.filter((id) => id !== categoryId)
                : [...prevFilters.categories, categoryId];
            return { ...prevFilters, categories: updatedCategories };
        });
    };

    const handleSizeChange = (sizeId) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            sizes: prevFilters.sizes.includes(sizeId)
                ? prevFilters.sizes.filter((id) => id !== sizeId)
                : [...prevFilters.sizes, sizeId],
        }));
    };

    const handleColorChange = (colorId) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            colors: prevFilters.colors.includes(colorId)
                ? prevFilters.colors.filter((id) => id !== colorId)
                : [...prevFilters.colors, colorId],
        }));
    };

    const handleAvailabilityChange = (availabilityStatus) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            availability: prevFilters.availability.includes(availabilityStatus)
                ? prevFilters.availability.filter((status) => status !== availabilityStatus)
                : [...prevFilters.availability, availabilityStatus],
        }));
    };

    const handleMinPriceChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: { ...prevFilters.priceRange, min: value },
        }));
    };

    const handleMaxPriceChange = (e) => {
        const value = parseInt(e.target.value, 10) || 10000;
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: { ...prevFilters.priceRange, max: value },
        }));
    };

    const handleClearAll = () => {
        setSelectedFilters({
            categories: [],
            sizes: [],
            colors: [],
            availability: [],
            priceRange: { min: 0, max: 10000 },
        });
    };

    return (
        <div className="col-12 col-lg-3">
            <button
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasFilter"
                className="btn btn-dark d-lg-none btn-filter-mobile rounded-bottom-0 d-flex align-items-center gap-2 px-4"
            >
                <i className="bi bi-funnel" />
                <span>Filter</span>
            </button>
            <nav className="navbar navbar-expand-lg p-0 st-mb-navfil">
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex={-1}
                    id="offcanvasFilter"
                    aria-labelledby="offcanvasFilterLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasFilterLabel">
                            Filter
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="shop-filters">
                            {/* Selected Filters Display */}
                            <div className="card mb-4 rounded-3 border">
                                <div className="card-body">
                                    <div className="selected-fillters">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <h6 className="mb-0">Filter</h6>
                                            <a
                                                href="javascript:;"
                                                className="link-secondary text-decoration-underline font-14"
                                                onClick={handleClearAll}
                                            >
                                                Clear all
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            {selectedFilters.categories.map((categoryId) => {
                                                const category = filters.categories?.find(cat => cat.id === categoryId);
                                                return category ? (
                                                    <button
                                                        key={categoryId}
                                                        className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                        onClick={() => handleCategoryChange(categoryId)}
                                                    >
                                                        <span>{category.name}</span>
                                                        <i className="bi bi-x-lg" />
                                                    </button>
                                                ) : null;
                                            })}
                                            {selectedFilters.sizes.map((sizeId) => {
                                                const size = filters.sizes?.find(s => s.id === sizeId);
                                                return size ? (
                                                    <button
                                                        key={sizeId}
                                                        className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                        onClick={() => handleSizeChange(sizeId)}
                                                    >
                                                        <span>{size.name}</span>
                                                        <i className="bi bi-x-lg" />
                                                    </button>
                                                ) : null;
                                            })}
                                            {selectedFilters.colors.map((colorId) => {
                                                const color = filters.colors?.find(c => c.id === colorId);
                                                return color ? (
                                                    <button
                                                        key={colorId}
                                                        className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                        onClick={() => handleColorChange(colorId)}
                                                    >
                                                        <i className={`bi bi-circle-fill text-${color.name.toLowerCase()}`} />
                                                        <span>{color.name}</span>
                                                        <i className="bi bi-x-lg" />
                                                    </button>
                                                ) : null;
                                            })}
                                            {selectedFilters.availability.map((availabilityItem) => (
                                                <button
                                                    key={availabilityItem}
                                                    className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                    onClick={() => handleAvailabilityChange(availabilityItem)}
                                                >
                                                    <span>{availabilityItem}</span>
                                                    <i className="bi bi-x-lg" />
                                                </button>
                                            ))}
                                            {(selectedFilters.priceRange.min > 0 || selectedFilters.priceRange.max < 10000) && (
                                                <button
                                                    className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                    onClick={() => setSelectedFilters(prev => ({ ...prev, priceRange: { min: 0, max: 10000 } }))}
                                                >
                                                    <span>${selectedFilters.priceRange.min} - ${selectedFilters.priceRange.max}</span>
                                                    <i className="bi bi-x-lg" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Categories Filter */}
                            <div className="card rounded-3 mb-4 border">
                                <div className="card-body p-4">
                                    <div className="categories-filter">
                                        <h5 className="mb-3">Categories</h5>
                                        <div className="list-group list-group-flush mb-0 gap-2">
                                            {filters && filters.categories && filters.categories.length > 0 && filters.categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    className={`list-group-item d-flex align-items-center justify-content-between py-1 px-2 rounded border-bottom-0 ${selectedFilters.categories.includes(category.id) ? 'active' : ''
                                                        }`}
                                                    onClick={() => handleCategoryChange(category.id)}
                                                >
                                                    <span className="category-name">{category.name}</span>
                                                    <span className="category-number">{category.products?.length}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="card rounded-3 mb-4 border">
                                <div className="card-body p-4">
                                    <div className="price-filter">
                                        <div id="slider-range" />
                                        <div className="d-flex align-items-center justify-content-center gap-3">
                                            <input
                                                className="form-control"
                                                type="number"
                                                min={0}
                                                max={9900}
                                                value={selectedFilters.priceRange.min}
                                                onChange={handleMinPriceChange}
                                                onInput="validity.valid||(value='0');"
                                                id="min_price"
                                            />
                                            <input
                                                className="form-control"
                                                type="number"
                                                min={0}
                                                max={10000}
                                                value={selectedFilters.priceRange.max}
                                                onChange={handleMaxPriceChange}
                                                onInput="validity.valid||(value='10000');"
                                                id="max_price"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div className="card rounded-3 mb-4 border">
                                <div className="card-body p-4">
                                    <div className="size-filter">
                                        <h5 className="mb-3">Size</h5>
                                        <div className="product-size-list d-flex align-items-center flex-wrap gap-3">
                                            {filters && filters.sizes && filters.sizes.length > 0 && filters.sizes.map((size) => (
                                                <div className="product-size-list-item" key={size.id}>
                                                    <input
                                                        type="checkbox"
                                                        className="btn-check"
                                                        name="options-size"
                                                        id={`size-${size.name}`}
                                                        checked={selectedFilters.sizes.includes(size.id)}
                                                        onChange={() => handleSizeChange(size.id)}
                                                    />
                                                    <label
                                                        className="btn btn-outline-dark btn-product-size"
                                                        htmlFor={`size-${size.name}`}
                                                    >
                                                        {size.name}
                                                    </label>
                                                </div>
                                            ))}
                                            {/* Assuming 'Free Size' doesn't come from the API with an ID, keep its current handling or assign a unique client-side ID */}
                                            <div className="product-size-list-item">
                                                <input
                                                    type="checkbox"
                                                    className="btn-check"
                                                    name="options-size"
                                                    id="size-option8"
                                                    checked={selectedFilters.sizes.includes('Free Size')} // This will still use the name if no ID is available
                                                    onChange={() => handleSizeChange('Free Size')} // This will still use the name if no ID is available
                                                />
                                                <label
                                                    className="btn btn-outline-dark border border-2 px-4 rounded-3"
                                                    htmlFor="size-option8"
                                                >
                                                    Free Size
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Colors Filter */}
                            <div className="card rounded-3 mb-4 border">
                                <div className="card-body p-4">
                                    <div className="color-filter">
                                        <h5 className="mb-3">Colors</h5>
                                        <div className="product-colors">
                                            {filters && filters.colors && filters.colors.length > 0 && filters.colors.map((color) => (
                                                <div className="form-check mb-2 align-items-center" key={color.id}>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id={`color-${color.name}`}
                                                        style={{ backgroundColor: color.name.toLowerCase() }}
                                                        checked={selectedFilters.colors.includes(color.id)}
                                                        onChange={() => handleColorChange(color.id)}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={`color-${color.name}`}
                                                    >
                                                        {color.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Filter */}
                            <div className="card rounded-3 mb-0 border">
                                <div className="card-body p-4">
                                    <div className="stock-filter">
                                        <h5 className="mb-3">Availability</h5>
                                        {filters && filters.availability && filters.availability.length > 0 && filters.availability.map((availabilityItem) => (
                                            <div className="form-check mb-2 align-items-center" key={availabilityItem}>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id={`availability-${availabilityItem}`}
                                                    checked={selectedFilters.availability.includes(availabilityItem)}
                                                    onChange={() => handleAvailabilityChange(availabilityItem)}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`availability-${availabilityItem}`}
                                                >
                                                    {availabilityItem}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default ProductFilters;