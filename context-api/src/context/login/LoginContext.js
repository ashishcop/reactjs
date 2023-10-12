import { createContext } from "react";

export const Login = {isLoggedIn:false, userName:'Default'}
const LoginContext = createContext(Login);

export default LoginContext;