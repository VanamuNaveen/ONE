import React from "react"
// import {Ab} from "./Html.js";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";  
function Time(){
    // const date = new Date();
    // var abc = date.getHours();
    var abc = prompt("enter number");
    let name;
    const pi = 3.14;
    const ab = 2;
    const add = pi+ab;
    var Month = prompt("enter month number");
    var math =  Math.random(1,90)*100;
    var changecolor = {
        color:""
      
    }
    if(abc<12){
        name = "good morning"
        changecolor.color = "blue"
    }
    else if(abc<18){
        name = "good afternoon"
        changecolor.color = "orange"
    }
    else{
        name = "good night"
        changecolor.color = "green"
    }
    // alert("hi"+{name});
    
    return(
        <div>
            
            <strong style= {changecolor}><h1 className="acd">{name}</h1></strong>
           { Month < 5 ? <h3>jan-may month</h3> : <h3>may-dec month</h3>}
           { math > 50 && <h3>HIGH</h3> }
           {math}
            {/* {Ab*2} */}
        {add}
        {/* <Link to="/New">New</Link> */}
        <Link to="/">Home</Link>
        </div>

        
    )

}
export default Time
// export {Ab}