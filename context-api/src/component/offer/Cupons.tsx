import { useContext } from "react"
import LoginContext from "../../context/login/LoginContext";

export default () => {
    const ctxLogin = useContext(LoginContext);
    return (<><h1>Cupons : {ctxLogin.userName} </h1></>)
}