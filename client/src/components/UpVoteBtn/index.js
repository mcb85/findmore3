import React from "react";

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpVoteBtn(props) {
  return (
    <span className="upVote-btn btn-success" style={{borderRadius:5,  padding: 10, paddingLeft: 15, paddingRight:15}} {...props} role="button" tabIndex="0">
      <i className="fa fa-thumbs-up">UpVote</i>
    </span>
  );
}

export default UpVoteBtn;

