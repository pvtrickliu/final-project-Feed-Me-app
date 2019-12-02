import React from "react";
import "./style.css";

function Btn(props) {
    return (
        <button id={props.id || ''} className="YesNo-btn" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Btn;


