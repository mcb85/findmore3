import React from "react";


export function Input(props) {
  return (
    <div className="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" {...props}/>
  <div className="input-group-append">
    <button type="button" class="btn btn-outline-secondary">Category</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-movies" href="#">Movies</a>
      <a className="dropdown-books" href="#">Books</a>
      <a className="dropdown-tvshows" href="#">TV Shows</a>
    </div>
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
