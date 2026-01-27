import React, { useState, useEffect } from 'react';
import { fetchFilters } from '../api/productAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { Range } from 'react-range';

const STEP = 100;
const MIN = 0;
const MAX = 10000;

function ProductFilters({ onFilterChange }) {
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const urlCategory = searchParams.get("category");
    const urlFabricType = searchParams.get("fabricType");
    const urlDressStyle = searchParams.get("dressStyle");

    const [visibleCategories, setVisibleCategories] = useState([]);
    const [visibleFabricTypes, setVisibleFabricTypes] = useState([]);
    const [visibleDressStyles, setVisibleDressStyles] = useState([]);



    const getFilters = async () => {
        try {
            const data = await fetchFilters();

            if (data.success) {
                const fetchedFilters = data.data;

                setFilters(fetchedFilters);

                // ✅ categories
                setVisibleCategories(
                    urlCategory
                        ? fetchedFilters.categories?.filter(
                            cat => cat.name.toLowerCase() === urlCategory.toLowerCase()
                        )
                        : fetchedFilters.categories
                );

                // ✅ fabric types
                setVisibleFabricTypes(
                    urlFabricType
                        ? fetchedFilters.fabricTypes?.filter(
                            fabric =>
                                fabric.name.toLowerCase() === urlFabricType.toLowerCase()
                        )
                        : fetchedFilters.fabricTypes
                );

                // ✅ dress styles
                setVisibleDressStyles(
                    urlDressStyle
                        ? fetchedFilters.dressStyles?.filter(
                            style =>
                                style.name.toLowerCase() === urlDressStyle.toLowerCase()
                        )
                        : fetchedFilters.dressStyles
                );
            }
        } catch (error) {
            console.error("Error fetching Filters:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getFilters();
    }, [    
        urlCategory,
        urlFabricType,
        urlDressStyle
    ]);

    // Initialize filter state to store IDs
    const [selectedFilters, setSelectedFilters] = useState({
        categories: [],
        sizes: [],
        colors: [],
        dressStyles: [],
        fabricTypes: [],
        availability: [],
        priceRange: { min: 0, max: 10000 },
        sortBy: "price_asc",
        key: "",
        category: "",
        dressStyle: "",
        fabricType: "",
    });

    // Effect to call onFilterChange whenever selectedFilters changes
    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters]);

    // Handler to remove external filters
    const removeExternalFilter = (field) => {
        setSelectedFilters(prev => ({ ...prev, [field]: "" }));
    };

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
    const handleDressStyleChange = (dressStyleId) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            dressStyles: prevFilters.dressStyles.includes(dressStyleId)
                ? prevFilters.dressStyles.filter((id) => id !== dressStyleId)
                : [...prevFilters.dressStyles, dressStyleId],
        }));
    };
    const handleFabricTypeChange = (fabricTypeId) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            fabricTypes: prevFilters.fabricTypes.includes(fabricTypeId)
                ? prevFilters.fabricTypes.filter((id) => id !== fabricTypeId)
                : [...prevFilters.fabricTypes, fabricTypeId],
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
            dressStyles: [],
            fabricTypes: [],
            availability: [],
            priceRange: { min: 0, max: 10000 },
            key: "",
            category: "",
            dressStyle: "",
            fabricType: "",
        });
        navigate('/shop', { replace: true, state: {} });
    };

    return (
        <div className="col-12 col-lg-3">
            <div className="offcanvas-body">
                <div className="shop-filters">
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
                                                    {/* --- NEW: Display and Remove External Filters --- */}
                                                    {selectedFilters.key && (
                                                        <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                            onClick={() => removeExternalFilter('key')}>
                                                            <span>{selectedFilters.key}</span>
                                                            <i className="bi bi-x-lg" />
                                                        </button>
                                                    )}

                                                    {selectedFilters.category && (
                                                        <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                            onClick={() => removeExternalFilter('category')}>
                                                            <span>{selectedFilters.category}</span>
                                                            <i className="bi bi-x-lg" />
                                                        </button>
                                                    )}

                                                    {selectedFilters.dressStyle && (
                                                        <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                            onClick={() => removeExternalFilter('dressStyle')}>
                                                            <span>{selectedFilters.dressStyle}</span>
                                                            <i className="bi bi-x-lg" />
                                                        </button>
                                                    )}
                                                    {selectedFilters.fabricType && (
                                                        <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                            onClick={() => removeExternalFilter('fabricType')}>
                                                            <span>{selectedFilters.fabricType}</span>
                                                            <i className="bi bi-x-lg" />
                                                        </button>
                                                    )}
                                                    {/* --- END NEW --- */}
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
                                                    {selectedFilters.dressStyles.map((dressStyleId) => {
                                                        const dressStyle = filters.dressStyles?.find(c => c.id === dressStyleId);
                                                        return dressStyle ? (
                                                            <button
                                                                key={dressStyleId}
                                                                className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                                onClick={() => handleDressStyleChange(dressStyleId)}
                                                            >
                                                                <i className={`bi bi-circle-fill text-${dressStyle.name.toLowerCase()}`} />
                                                                <span>{dressStyle.name}</span>
                                                                <i className="bi bi-x-lg" />
                                                            </button>
                                                        ) : null;
                                                    })}
                                                    {selectedFilters.fabricTypes.map((fabricTypeId) => {
                                                        const fabricType = filters.fabricTypes?.find(c => c.id === fabricTypeId);
                                                        return fabricType ? (
                                                            <button
                                                                key={fabricTypeId}
                                                                className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5"
                                                                onClick={() => handleFabricTypeChange(fabricTypeId)}
                                                            >
                                                                <i className={`bi bi-circle-fill text-${fabricType.name.toLowerCase()}`} />
                                                                <span>{fabricType.name}</span>
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
                                                            <span>₹{selectedFilters.priceRange.min} - ₹{selectedFilters.priceRange.max}</span>
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
                                                    {visibleCategories && visibleCategories.length > 0 &&
                                                        visibleCategories.map((category) => (
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
    <h5 className="mb-3">Price Range</h5>

    {/* Dual-thumb slider */}
    <Range
      step={STEP}
      min={MIN}
      max={MAX}
      values={[selectedFilters.priceRange.min, selectedFilters.priceRange.max]}
      onChange={(values) =>
        setSelectedFilters((prev) => ({
          ...prev,
          priceRange: { min: values[0], max: values[1] },
        }))
      }
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '6px',
            width: '100%',
            background: '#ddd',
            borderRadius: '3px',
            position: 'relative',
          }}
        >
          {/* Highlight between thumbs */}
          <div
            style={{
              position: 'absolute',
              height: '100%',
              left: `${((selectedFilters.priceRange.min - MIN) / (MAX - MIN)) * 100}%`,
              width: `${((selectedFilters.priceRange.max - selectedFilters.priceRange.min) / (MAX - MIN)) * 100}%`,
              background: '#333',
              borderRadius: '3px',
            }}
          />
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '20px',
            width: '20px',
            backgroundColor: '#333',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    />

    {/* Min/Max input boxes */}
    <div className="d-flex align-items-center gap-3 mt-3">
      <input
        type="number"
        className="form-control"
        min={MIN}
        max={selectedFilters.priceRange.max - STEP}
        value={selectedFilters.priceRange.min}
        onChange={(e) =>
          setSelectedFilters((prev) => ({
            ...prev,
            priceRange: {
              ...prev.priceRange,
              min: Math.min(Number(e.target.value), prev.priceRange.max - STEP),
            },
          }))
        }
      />
      <span>—</span>
      <input
        type="number"
        className="form-control"
        min={selectedFilters.priceRange.min + STEP}
        max={MAX}
        value={selectedFilters.priceRange.max}
        onChange={(e) =>
          setSelectedFilters((prev) => ({
            ...prev,
            priceRange: {
              ...prev.priceRange,
              max: Math.max(Number(e.target.value), prev.priceRange.min + STEP),
            },
          }))
        }
      />
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
                                                                id={`size-${size.code}`}
                                                                checked={selectedFilters.sizes.includes(size.id)}
                                                                onChange={() => handleSizeChange(size.id)}
                                                            />
                                                            <label
                                                                className="btn btn-outline-dark btn-product-size"
                                                                htmlFor={`size-${size.code}`}
                                                            >
                                                                {size.code}
                                                            </label>
                                                        </div>
                                                    ))}
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
                                                                style={{ backgroundColor: color.code }}
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
                                    {/* Dress Style Filter */}
                                    <div className="card rounded-3 mb-4 border">
                                        <div className="card-body p-4">
                                            <div className="color-filter">
                                                <h5 className="mb-3">Dress Styles</h5>
                                                <div className="product-colors">
                                                    {visibleDressStyles && visibleDressStyles.length > 0 &&
                                                        visibleDressStyles.map((dressStyle) => (
                                                            <div className="form-check mb-2 align-items-center" key={dressStyle.id}>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id={`dressStyle-${dressStyle.name}`}
                                                                    // style={{ backgrounddressStyle: dressStyle.code }}
                                                                    checked={selectedFilters.dressStyles.includes(dressStyle.id)}
                                                                    onChange={() => handleDressStyleChange(dressStyle.id)}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor={`dressStyle-${dressStyle.name}`}
                                                                >
                                                                    {dressStyle.name}
                                                                </label>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Colors Filter */}
                                    <div className="card rounded-3 mb-4 border">
                                        <div className="card-body p-4">
                                            <div className="color-filter">
                                                <h5 className="mb-3">Fabric Types</h5>
                                                <div className="product-colors">
                                                    {visibleFabricTypes && visibleFabricTypes.length > 0 &&
                                                        visibleFabricTypes.map((fabricType) => (
                                                            <div className="form-check mb-2 align-items-center" key={fabricType.id}>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id={`fabricType-${fabricType.name}`}
                                                                    // style={{ backgroundfabricType: fabricType.code }}
                                                                    checked={selectedFilters.fabricTypes.includes(fabricType.id)}
                                                                    onChange={() => handleFabricTypeChange(fabricType.id)}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor={`fabricType-${fabricType.name}`}
                                                                >
                                                                    {fabricType.name}
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
            </div>
        </div>
    );
}

export default ProductFilters;