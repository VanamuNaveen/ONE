import React from "react"
import { Link } from "react-router-dom"
import "./Hap.css"

function Nac(){
    return(
        <div>hello Nac<hr></hr>
        <Link className="asd" to='/Rserver'>Rserver</Link>
        <Link to='/Constant'>Constant</Link>
        <Link to='/Time'>Time</Link>
        <Link to='/Adds'>Adds</Link>
        <Link to='/Event'>Event</Link>
        <Link to='/Event1'>Event1</Link>
        <Link to='/Bt1'>Bt1</Link>
        <Link to='/ONE'>ONE</Link>
        <Link to='/TWO'>TWO</Link>
        

        
        </div>
    )
}
export default Nac