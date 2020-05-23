import React from "react";

//Image by Arek Socha from Pixabay
const backgroundImage = 'movie-reel.jpg';

function Jumbotron3({ children }) {
  return (
    <div
      style={{
        height: 300, clear: "both", paddingTop: 80, textAlign: "center", backgroundImage: `url('${backgroundImage}')`
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron3;
