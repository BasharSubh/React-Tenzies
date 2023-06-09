import React from "react";

function Die (props) {


    const stylea = {
        backgroundColor: props.isHeld ? "#59E391" : ""
    } 

    return (
            <div className="box" style={stylea}  onClick={props.handleHold}>
                <div>{props.value}</div>
            </div>
    )
}

export default Die