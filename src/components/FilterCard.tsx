import React from "react";
import { Dispatch, SetStateAction } from "react";

interface Filter {
    category: string;
    price: string;
}

interface FilterCardProps {
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
}

export default function FilterCard({ filter, setFilter }: FilterCardProps) {
    const [categoryDisplay, setCategoryDisplay] = React.useState<boolean>(false);
    const [priceDisplay, setPriceDisplay] = React.useState<boolean>(false);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, category: event.target.value });
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, price: event.target.value });
    };
    return (
        <div className="filterCard-container">
            {/* Category */}
            <div className="category-section">
                <p onClick={() => setCategoryDisplay(!categoryDisplay)}>
                    <span>Category</span>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
                <ul style={{ height: categoryDisplay ? "100%" : "0" }}>
                    <li>
                        <input
                            type="radio"
                            name="category"
                            id="none"
                            value=""
                            onChange={handleCategoryChange}
                            checked={filter.category === ""}
                        />
                        <label htmlFor="none">None</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="category"
                            id="womens-dresses"
                            value="womens-dresses"
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="womens-dresses">Women Dresses</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="category"
                            id="womens-shoes"
                            value="womens-shoes"
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="womens-shoes">Women Shoes</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="category"
                            id="mens-shirts"
                            value="mens-shirts"
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="mens-shirts">Men Shirts</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="category"
                            id="mens-shoes"
                            value="mens-shoes"
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="mens-shoes">Men Shoes</label>
                    </li>
                </ul>
            </div>

            <hr />

            {/* Price Range */}
            <div className="priceRange-section">
                <p onClick={() => setPriceDisplay(!priceDisplay)}>
                    <span>PRICE RANGE</span>
                    <i className="fa-solid fa-angle-down"></i>
                </p>
                <ul style={{ height: priceDisplay ? "100%" : "0" }}>
                    <li>
                        <input
                            type="radio"
                            name="price"
                            id="none"
                            value=""
                            onChange={handlePriceChange}
                            checked={filter.price === ""}
                        />
                        <label htmlFor="none">None</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="price"
                            id="<50"
                            value="<50"
                            onChange={handlePriceChange}
                        />
                        <label htmlFor="<50">Under 50</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="price"
                            id=">50"
                            value=">50"
                            onChange={handlePriceChange}
                        />
                        <label htmlFor=">50">Above 50</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}
