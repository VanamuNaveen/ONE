import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// function Event1(){
//         var [name,fname] = useState("")
//         var [name1,fname1] = useState("")
//         var [name2,fname2] = useState("")
//         function Setname(event){
//             fname(event.target.value)
           
//         }
//         function Setname1(event){
//             fname2(event.target.value)
//         }
//         function Onclick(){
//             fname1(name)
//         }
//         function Onclick1(){
//             fname2(name1)
//         }

//         return(
//             <div><h3>name {name} {name2}</h3>

//             <input onChange={Setname} type="text" placeholder="enter first name" value={name} ></input><br></br>
//             <input onChange={Setname1} type="text1" placeholder="enter last name" value={name2} ></input><br></br>
//             <button onClick={Onclick}>submit</button>
//             <Link to='/'>Home</Link>
//             </div>
//         )
// }
function Event1(){
    const [value,setvalue] = useState({
        fname:"",
        lname:"",
        email:""
    })
    function Addvalue(event){
        const {name,value}=event.target;
        const abc = {
            [name]:value

        }
        setvalue(prevValue=>{
            return{
            ...prevValue,
                ...abc
            }
        })
    }
    const [name1,setname1] = useState({
        fname:"",
        lname:"",
        email:""
    })
    return(
        <div>
        <h1>{name1.fname} {name1.lname}</h1>
        {name1.email}<br></br>
        <input onChange={e=>Addvalue(e)} name="fname" placeholder="first name" type="text"></input>
        <input onChange={e=>Addvalue(e)} name="lname" placeholder="last name" type="text"></input>
        <input onChange={e=>Addvalue(e)} name="email" placeholder="email" type="text"></input><br></br>
        <button type="submit" onClick={()=>{setname1(prev=>({...prev,...value}))}}>submit</button>
            <Link to='/'>Home</Link>
        </div>
    )
}
export default Event1