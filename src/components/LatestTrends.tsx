import { data } from "../data"

export default function LatestTrends() {
    return (
        <div className='latestTrends-container'>
            <p>Latest Trends</p>
            <div>
                {/* Trend Cards  */}
                {
                    data.slice(0, 5).map((product) => (
                        <div>
                            <img src={product.thumbnail} alt="img" />
                            <p>{product.title}</p>
                        </div>
                    ))
                }
            </div>

            {/* Suggestions  */}
            <p>Popular Suggestions</p>
            <ul>
                <li>Striped shirt dress</li>
                <li>Satin shirts</li>
                <li>Denim Jumpsuit</li>
                <li>Leather Dresses</li>
                <li>Solid tShirts</li>
            </ul>
        </div>
    )
}
