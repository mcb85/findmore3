import React from "react";

export function SmTextbox(props) {
    return (
        <div className="form-group">
            <label></label>
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

export function LgTextbox(props) {
    return (
        <div className="form-group">
            <label></label>
            <textarea rows="4" cols="80" className="form-control" {...props}/>
        </div>
    );
}