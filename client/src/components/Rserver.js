import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
function renderCondtionally(){
    var isLoggedIn=false;
    if(isLoggedIn===true){
        return <h3>Hellopage</h3>
    }
    else{
        return <Login/>
    }
}
function Rserver(){
   
    return(
        <div>
            <h1>Server</h1>
            <Link to="/">home</Link>
            {renderCondtionally()}
            
        </div>
    )
}
export default Rserver