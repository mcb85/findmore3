import React from "react";
import "./style.css";

function Card({children}) {
  return (
    <div
      className="card">
      {children}
    </div>
  );
}

export default Card;
