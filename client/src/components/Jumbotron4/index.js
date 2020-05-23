import React from "react";

const backgroundImage = 'hollywood.jpg';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: `url('${backgroundImage}')` }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
