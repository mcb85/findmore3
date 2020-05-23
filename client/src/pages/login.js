import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import { SmTextbox} from "../components/Textbox";
import {  LinkButton } from "../components/Button";
import Nav from "../components/Nav";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

// const divStyle = {
  
// }

class LoginForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    username: "",
    password: "",
  };
  }

  handleInputChange = async (event) => {
    const { name, value } = event.target;
    await this.setState((state, props) => ({
      [name]: value
    }));
  };

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  handleSubmit = (event) => {
    console.log("submitting username and password")
    event.preventDefault();
    if (this.state.username && this.state.password) { 
      API.LoginUser({
        username: this.state.username,
        password: this.state.password,
      })
        .then((res) =>
        console.log(res))
        .catch((err) => console.log(err));
    }
    console.log("loginUser:" + this.state.username);
  };

  render() {
    return (
      <Container fluid>
        <Nav/>
        <Row className="no-gutters">
          <Col size="sm-6 " className=".mr-0 .pr-0">
            <Jumbotron><img className="rounded-5" src="icon.png" width="250" alt="logo"></img>
          </Jumbotron>
          </Col>
          
          <Col size="sm-6 " className=".ml-0, .pr-0">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <br></br>
            <form className="form-horizontal">
              <div className="form-group">
                <Row>
                  <SmTextbox
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Username"
                  />
                </Row>
                <Row>
                  <SmTextbox
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
                  />
                </Row>
                <button className="btn btn-primary" style={{ borderRadius: 5 }}
                  disabled={!(this.state.username && this.state.password)}
                  label="Login"
                  onClick={this.handleSubmit} >Login
                </button>
                <LinkButton label="Don't have an account? Sign up" href="/register" method="GET" />
              </div>
              </form>
          </Col>

          
          
        </Row>
      </Container>
    );
  }
}

export default LoginForm