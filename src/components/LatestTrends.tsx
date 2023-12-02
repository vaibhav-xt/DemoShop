import { data } from "../data"

export default function LatestTrends() {
    return (
        <div className='latestTrends-container'>
            <p>Latest Trends</p>
            <div>
                {/* Trend Cards  */}
                {
                    data.slice(0, 5).map((product) => (
                        <div key={product.id}>
                            <img src={product.thumbnail} alt="img" />
                            <p>{product.title}</p>
                        </div>
                    ))
                }
            </div>

            {/* Suggestions  */}
            <p>Popular Suggestions</p>
            <ul>
                <li>Women Dresses</li>
                <li>Women Shoes</li>
                <li>Men Shirts</li>
                <li>Men Shirts</li>
            </ul>
        </div>
    )
}
