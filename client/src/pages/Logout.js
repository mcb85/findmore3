import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../components/Button";
import { render } from "react-dom";

class Logout extends Component {
    state = {
        navigate: false
    };


    logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true });
    };

    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/" push={true} />;
        }

        return <button className="btn btn-primary" onClick={this.logout}> Log Out</button>
    }
}

export default Logout;