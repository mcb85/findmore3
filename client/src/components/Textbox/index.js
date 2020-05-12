import React from "react";

export function SmTextbox() {
    return (
        <div class="form-group">
            <label></label>
            <input class="form-control" type="text" placeholder="" />
        </div>
    );
}

export function LgTextbox() {
    return (
        <div class="form-group">
            <label></label>
            <textarea rows="4" cols="80" class="form-control" placeholder="" />
        </div>
    );
}