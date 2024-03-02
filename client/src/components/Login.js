import React from "react";
import Input from "./Input";
function Login(){
    return(
        <div>
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="enterpassword"/>
            <button type="login">Login</button>
        </div>
    )
}
export default Login