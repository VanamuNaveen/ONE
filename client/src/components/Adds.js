import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Adds(){

    const [sum,whattodo]= useState(0);
    var abc = new Date().toLocaleTimeString()
    const [ab,Current] = useState(abc);
    setInterval(Ctime,1000)
   
    var ac = new Date().toLocaleTimeString()
    const [abcd,current] = useState(ac);
    function Update(){
        whattodo(sum+1)
    }
    function Lowdate(){
        whattodo(sum-1)
    }

    function Ctime(){
        var newtime = new Date().toLocaleTimeString()
        Current(newtime)
    }
    function Mtime(){
        var Ntime = new Date().toLocaleTimeString()
        current(Ntime)
    }
    // function Mtime1(){
    //     var Ntime1 = new Date().toLocaleTimeString()
    //     current(Ntime1)
    // }
    return(
        <div>
        <h1>addition</h1>
        <h2>{sum}</h2>
        <h1>{ab}</h1>
        <button onClick={Update}>+</button>
        <button onClick={Lowdate}>-</button><br></br>
        <h1>{abcd}</h1>

        <button onClick={Mtime}>Time</button>
        {/* <h1>{abcd}</h1>
        
        <button onClick={Mtime1}>Time</button> */}
            <Link to="/">home</Link>

        </div>
    )
}
export default Adds