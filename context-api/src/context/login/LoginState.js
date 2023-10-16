import { useState } from "react";
import LoginContext from "./LoginContext";



const LoginState = ({ children }) => {
     const [state, setState] = useState({ isLoggedIn: false, userName: 'Default' })
    // const state = { name: 'Default'}
    return (
        <LoginContext.Provider value={ {state,setState} }>{children}</LoginContext.Provider>
    )
}

export default LoginState;