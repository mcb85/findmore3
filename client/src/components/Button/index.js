import React from "react";
import "./style.css"
  
export  function LinkButton(props) {
  return (
    <li>
      <a href={props.href} method={props.method} style={props.style} className="nav-link text-info bold">{props.label}</a>
    </li>
  );
}

export function Button(props) {
  return (
    <button type="button" className={"btn btn-primary"} style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
        {props.label}
    </button>
  );
}
