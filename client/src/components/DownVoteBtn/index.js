import React from "react";

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DownVoteBtn(props) {
  return (
    <span className="downVote-btn btn-danger" style={{borderRadius: 5, padding: 10}} {...props} role="button" tabIndex="0">
      <i className="fa fa-thumbs-down">DownVote</i>
    </span>
  );
}

export default DownVoteBtn;

