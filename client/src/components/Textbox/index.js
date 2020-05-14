import React from "react";

export function SmTextbox() {
    return (
        <div className="form-group">
            <label></label>
            <input className="form-control" type="text" placeholder="" />
        </div>
    );
}

export function LgTextbox() {
    return (
        <div className="form-group">
            <label></label>
            <textarea rows="4" cols="80" class="form-control" placeholder="" />
        </div>
    );
}