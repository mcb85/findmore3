import React from "react";
import "./style.css";

function Card({children}) {
  return (
    <div
      className="card" style={{borderRadius:5}}>
      {children}
    </div>
  );
}

export default Card;
