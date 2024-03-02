import React from "react";
import { Link } from "react-router-dom";
import './BT1.css'
function Bt1(){
    return(
        <div>
        
        <div className="row">
    <div className="col-sm-6">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      
      <div  style={{backgroundColor:"red"}}className="col">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div  style={{backgroundColor:"blue"}}className="col">
      <h3>Column 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    
    <div className="row">
    <div className="col-lg-6 col-sm-12"><p>Column</p></div>
    <div className="col-lg-3 col-sm-6"><p>Column</p></div>
        <div className="col-lg-3 col-sm-6"><p>Column</p></div>
    </div>

    </div>
            <Link to='/'>Home</Link>
    
        </div>
    )
}
export default Bt1