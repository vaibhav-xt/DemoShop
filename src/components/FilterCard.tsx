import { useState } from "react"

export default function FilterCard() {
    const [category, setCategory] = useState<string>("")
    const [categoryDisplay, setCategoryDisplay] = useState<boolean>(false)
    const [priceDipslay, setPriceDisplay] = useState<boolean>(false)

    return (
        <div className='filterCard-container'>
            {/* Brand */}
            <div className="category-section">
                <p>
                    <span>Category</span>
                    <i className="fa-solid fa-angle-down" onClick={() => setCategoryDisplay(categoryDisplay ? false : true)}></i>
                </p>
                <ul style={{ "height": categoryDisplay ? "100%" : "0" }}>
                    <li>
                        <input type="checkbox" name="category" id="womens-dresses" value="womens-dresses" />
                        <label htmlFor="womens-dresses">Dresses</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" id="womens-shoes" value="womens-shoes" />
                        <label htmlFor="womens-shoes">Shoes</label>
                    </li>
                </ul>
            </div>

            <hr />

            {/* Price Range */}
            <div className="priceRange-section">
                <p>
                    <span>PRICE RANGE</span>
                    <i className="fa-solid fa-angle-down" onClick={() => setPriceDisplay(priceDipslay ? false : true)}></i>
                </p>
                <ul style={{ "height": priceDipslay ? "100%" : "0" }}>
                    <li>
                        <input type="checkbox" name="price" id=">500" value=">500" />
                        <label htmlFor=">500">Under 500</label>
                    </li>
                    <li>
                        <input type="checkbox" name="price" id="<1000" value="<1000" />
                        <label htmlFor="<1000">1000 To 3000</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}
