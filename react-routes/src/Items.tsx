import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default () => {
    const [serachParams, setSearchParams] = useSearchParams({ n: '3' });
    const number = serachParams.get('n');
    return (<>
        <h1>Items</h1>
        <ul>
            {[1, 2, 3].map(el => {
                return (<li key={`${crypto.randomUUID()}`}><Link to={`/items/${el}`}  >{`Item ${el}`}</Link></li>)
            })}
        </ul>
        <input type="number" value={`${number}`} onChange={e => setSearchParams({ n: e.target.value })} />
    </>)
}