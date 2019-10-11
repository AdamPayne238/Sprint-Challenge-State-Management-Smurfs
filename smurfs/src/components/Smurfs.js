import React from "react";

//SMURF DISPLAY COMPONENT
const Smurfs = props => {
    //CHECK AFTER RECIEVING DATA{PROPS>QUOTE>TEXT}???
    console.log("Smurfs", props.smurf)
    return (
    <div>
        <h1>Smurf Display Component</h1>
        <h1>{props.smurf.name}</h1>
        <h2>Age: {props.smurf.age}</h2>
        <h2>Height: {props.smurf.height}</h2>
        <h2>ID: {props.smurf.id}</h2>
        
    </div>
    );
};

export default Smurfs;