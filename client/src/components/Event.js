import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// function Event(){
//     var [name,fname] = useState("")
//     var [name1,fname1] = useState("")
//     function Setname(event){
//         fname(event.target.value)
       
//     }
//     function Onclick(){
//         fname1(name)
//     }
//     return(
//         <div><h3>name {name1}</h3>
//         <input onChange={Setname} type="text" placeholder="enter name" value={name} ></input><br></br>
//         <button onClick={Onclick}>submit</button>
//         <Link to='/'>Home</Link>
//         </div>
//    } )
function Event(){
    const [name1,setvalue] = useState({
        fname: "",
        lname: "",
        email: "",
    })
function ONchange(event){
    const {name,value} = event.target;
    const abc = {
        [name]:value
    }
    setvalue(prevValue => {
        return {
            ...prevValue,
        ...abc        
        }
    }

    
        )
}   const [dis,setdis] = useState({
    fname:"",
    lname:"",
    email:"",
})

    return(
        <div>hello {dis.fname} {dis.lname}
        <p>{dis.email}</p>
        
            <input onChange={e=>ONchange(e)} name="fname" type="text" placeholder="firstname" />
            <input onChange={e=>ONchange(e)} name="lname" type="text" placeholder="lastname" />
            <input onChange={e=>ONchange(e)} name="email" type="text" placeholder="email"/><br></br>
            <button type="submit" onClick={()=>{
                setdis(prev=>({...prev,...name1}))
            }}>Submit</button>
           
            
        <Link to='/'>Home</Link>

        </div>
    )
}
export default Event