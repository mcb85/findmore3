import React from "react";

export function SmTextbox(props) {
    return (
        <div className="form-group">
            <label></label>
            <input className="form-control" style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} type="text" {...props} />
        </div>
    );
}

export function LgTextbox(props) {
    return (
        <div className="form-group">
            <label></label>
            <textarea rows="4" cols="80" style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} className="form-control" {...props}/>
        </div>
    );
}