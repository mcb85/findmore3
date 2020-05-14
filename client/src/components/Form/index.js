import React from "react";

export function Input(props) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" {...props} />
      <div className="input-group-append">
        <select className="dropdown">
          <option>Category</option>
          <option value="Books">Books</option>
          <option value="Movies">Movies</option>
          <option value="Shows">Shows</option>
        </select>
      </div>
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
