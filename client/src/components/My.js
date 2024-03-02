import React from "react"
function My(){
    const num = "21";
    const fname = "vanamu";
    var lname = "naveen";
    const date = new Date();
    const date1 = date.getFullYear();

    return(
    <div>

        <p>my first file in js</p>
        <h1>number {Math.floor(Math.random()*10)}</h1>
        <h1>number {num}</h1>
        <h1>number {1+6}</h1>
        <p>hello {fname +" "+lname} using concatenation</p>
        <p>hi {fname} {lname}</p>
        <p>date {date.getFullYear()}</p>
        <p>date1 {date1}</p>

    </div>
        
    )
}
export default My