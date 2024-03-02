import React from "react"
import "./Hap.css"
export function Html(){
    var ab = "23";
    var a= []
    const abc = "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg"
    for(var i=0;i<10;i++)
    {
        a.push(i)
    }
    return(

        <div>
           <p className="abc" contentEditable="true" ><h3>alert("hello");</h3></p>
           {
            a.map((i)=>{
          return <p className="abc" contentEditable = "true"> <h3>{i}</h3></p>
               
            })
           }
           <img className = "anc" src = "https://cdn.pixabay.com/photo/2023/09/18/20/01/woman-8261342_640.jpg" alt="empty"></img>
           <img className = "anc" src="https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_640.jpg" alt="empty"></img>
           <img  className = "anc" src={abc} alt="empty"></img>
           {/* <p style = {{color:"green"}}>pravi akka phone <strong style = {{color:"red"}}>konnadi </strong>ani geera chestundi</p> */}
        </div>
       
    )
}
export default Html 
// export {Ab};
