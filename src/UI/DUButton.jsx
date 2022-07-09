import React from "react";

function DUButton(props) {
  return (<>
    <button className="du-btn" onClick={props.func}>{props.sub}</button>
  </>)
  
}

export default DUButton;
