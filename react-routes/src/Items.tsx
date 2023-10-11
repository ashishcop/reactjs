import { Link } from "react-router-dom"

export default () => {
    return (<>
        <h1>Items</h1>
        <ul>
            {[1, 2, 3].map(el => {
                return (<li key={`${crypto.randomUUID()}`}><Link to={`/items/${el}`}  >{`Item ${el}`}</Link></li>)
            })}
        </ul>
    </>)
}