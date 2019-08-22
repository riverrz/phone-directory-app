import React from "react";
import "./PhoneList.css";

const PhoneList = props => {
    const mappedPhoneArray = props.phoneArray.map((p,i) => {
        return <li key={i}>{p} <button>Delete</button></li>
    })
    return(
        <ul>
            {mappedPhoneArray}
        </ul>
    );
}

export default PhoneList;