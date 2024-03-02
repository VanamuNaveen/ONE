import React from "react"
import New from "./New";
import { Link } from "react-router-dom";
const Constantarr = [ 
    {
        name:"one",img:"https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",phno:"123456789"
    },
    {
        name:"two",img:"https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",phno:"987654321"

    }
]; 
function Constant(){
    
    return( 
        <div>
           <New name = {Constantarr[0].name} image = {Constantarr[0].img} phno = {Constantarr[0].phno}/> 
            <New name = {Constantarr[1].name} image = {Constantarr[1].img} phno = {Constantarr[1].phno}/>  
            <Link to ="/">Home</Link>
        </div>
    )
}
export default Constant
export {Constantarr}