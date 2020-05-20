import React from "react";

//Image by Arek Socha from Pixabay
const bgImage = 'faq.jpg';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 80, textAlign: "center", backgroundImage: `url('${bgImage}')`
}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
