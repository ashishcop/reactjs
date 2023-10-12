import { useState } from "react";
import LoginContext from "./LoginContext";

const [ login, setLogin] = useState({isLoggedIn:false, userName:'Default'})

export default (props) => {
    return (
        <LoginContext.Provider value={ { login }}>{props.children}</LoginContext.Provider>
    )
}
