import React from "react"
import ReactDOM from "react-dom"
// import "./Hap.css"

function New(props){
    
    return(
        // <div className="card1">
        // <h1 className="no1">Form 1</h1>
        // <h1 className="no2">{props.name}</h1>
        // <img className= "no3" src={props.image} alt="no image"></img>
        //     {/* <New /> */}
        // <br />abc : <input id="fname" placeholder="Enter Your Name" />
        // <p className="no4">{props.phno}</p>
        // </div>
        <div className="card1">
            <label className="no1">Form 1</label>
            <div>
                <h1 className="no2">{props.name}</h1>
                <div>
                    <img className= "no3" src={props.image} alt="no image"></img>
                </div>
            </div>
            <div>
                <label>abc : </label>
                <input id="fname" placeholder="Enter Your Name" />
            </div>
            <label className="no4">{props.phno}</label>
        </div>
    )
}
// the part which does not work in system (class - 295)
// ReactDOM.render(
//     <div>
//         <New />"https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg"
//         <New />
//     </div>,
// document.getElementById("root")
// );
export default New