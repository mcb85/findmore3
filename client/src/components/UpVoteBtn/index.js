import React from "react";

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpVoteBtn(props) {
  return (
    <span className="upVote-btn " {...props} role="button" tabIndex="0">
      <i className="fa fa-thumbs-up">UpVote</i>
    </span>
  );
}

export default UpVoteBtn;

