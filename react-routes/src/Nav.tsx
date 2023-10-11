import { Link, Outlet } from "react-router-dom"

export default () => {
    return (<><ul><li><Link to='/'>Home</Link></li><li><Link to='/items'>Items</Link></li><Link to='/support'>Support</Link></ul><Outlet context={{ test: 'test-value' }} /></>)
}