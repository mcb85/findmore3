import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import { SmTextbox, Lgtextbox } from "../components/Textbox";
import { Button, LinkButton } from "../components/Button";
import Nav from "../components/Nav";
import API from "../utils/API";

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
    if (this.state.username && this.state.password) {
      API.LoginUser({
        username: this.state.username,
        password: this.state.password,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Nav/>
        <Row>
          <Col size= "md-12">
          </Col>
          <Col size="md-12">
            <form className="form-horizontal">
              <div className="form-group">
                <Row>
                  <SmTextbox
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  <SmTextbox
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Button
                  btnType="primary"
                  label="Register"
                  onClick={this.handleSubmit}
                />
                <LinkButton label="Go to Login Page" href="/login" method="GET" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterForm