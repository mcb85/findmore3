import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span className="save-btn btn btn-success" style={{borderRadius:5, padding:10}} {...props} role="button" tabIndex="0">
      Save Collection
    </span>
  );
}

export default SaveBtn;
