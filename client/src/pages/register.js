import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import { SmTextbox } from "../components/Textbox";
import { Button, LinkButton } from "../components/Button";
import Card from "../components/Card";
import Nav from "../components/Nav";
import API from "../utils/API";

var divStyle = {
  display: "flex",
  alignItems: "center",
  textAlign:"center"
}

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("username")
    console.log("password")
    if (this.state.username && this.state.password) {
      API.RegisterUser({
        username: this.state.username,
        password: this.state.password,
      })
        .then((res) =>
          console.log(res))
        .catch((err) => console.log(err));
    }
    console.log("registering user")
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
          </Col>
          <Col size="md-12 d-flex justify-content-center ">
            <Card>
              <br></br>
              <img className="mx-auto" src="icon.png" alt="logo" width="60px"></img>
              <br></br>
              <h4 className="text-center">Sign Up to Search Movies and Find More! </h4>
            <form className="form-horizontal d-flex justify-content-center">
              <div className="form-group"  >
                <Row >
                  <Col size="sm-12"></Col>
                  {/* <p className="d-flex justify-content-center">Username</p> */}
                  <SmTextbox
                    placeholder="Username: 8-15 characters"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  {/* <strong><p className="d-flex justify-content-center">Password</p></strong> */}
                  <SmTextbox
                    name="password"
                    type="password"
                    placeholder="Password: 8-15 characters"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Row>
                <button className="btn btn-primary" style={{ borderRadius: 5 }}
                  disabled={!(this.state.username && this.state.password)}
                  label="Register"
                  onClick={this.handleSubmit} >Register
                </button>
              </div>
              </form>
              <br></br>
            <h5 className="text-center">Already Have an Account?</h5>
              <LinkButton className="text-center" style={{ divStyle }} label="Go to Login Page" href="/login" method="GET" />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterForm