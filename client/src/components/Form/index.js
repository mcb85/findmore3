import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
      <input type="text" className="form-control input-bordered border-primary bg-light d-flex justify-content-center"
        style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} {...props} />
      {/* <div className="input-group-append">
        <select value={props.dropdownValue} className="dropdown dropdown-bordered bg-primary text-white" style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 5, borderTopLeftRadius: 0, borderTopRightRadius: 5}} >
          <option>Category</option>
          <option value="books">Books</option>
          <option value="movies">Movies</option>
          <option value="shows">Shows</option>
        </select>
      </div> */}
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, borderRadius: '5px' }} className="btn btn-primary btn-bordered">
      {props.children}
    </button>
  );
}
