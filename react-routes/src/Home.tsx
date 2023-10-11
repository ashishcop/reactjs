import { useOutletContext } from 'react-router-dom'

export default () => {
    const out: any = useOutletContext();
    return (<><h1>Home {out.test} </h1></>)
}