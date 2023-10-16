import React, { useContext, useState } from "react";
import LoginContext from "../../context/login/LoginContext";


export default () => {
    const a: any = useContext(LoginContext);
    const [name, setName] = useState("");
    return (<><h1>coupons  of  {a.state.userName}   </h1><input value={name} onChange={(e) => setName(e.target.value)} /><button onClick={() => { a.setState({ userName: name }) }} >setstate</button></>)
}