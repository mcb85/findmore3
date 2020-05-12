import React from "react";
import { Container, Row, Col } from "../Grid";
import { Dropdown } from "../Dropdown";
import { SmTextbox, Lgtextbox } from "../Textbox";
import { Button } from "../Button";
import API from "../../utils/API";

export function Modal({userId}) {
  state = {
    description: "",
    type: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    userId: userId
  };

  closeModal = (event) => {
      event.preventDefault();

  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.description &&
      this.state.title1 &&
      this.state.title2 &&
      this.state.title3
    ) {
      API.create{this.state.type}Collection({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
      })
        .then((res) => this.loadBooks())
        .catch((err) => console.log(err));
    }
    else {
        alert("A collection must have a description and 3 titles");
    }
  };

  return (
    <div
      className="modal fade"
      id="info-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" id="modal-card">
          <div className="modal-header">
            <h2 className="modal-title">Add a Collection</h2>
          </div>
          <div className="modal-body">
            <Container>
              <Col>
                <h4>What kind of collection are you making?</h4>
                <Dropdown  
                  value={this.state.type}
                  onChange={this.handleInputChange}
                  name="type"
                />
                <Lgtextbox
                  label="Describe what your collection is about"
                  placeholder="What's the vibe?"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                />
                <h4>Enter your titles below</h4>
                <h4>Each collection requires at least 3 titles</h4>
                <SmTextbox
                  value={this.state.title1}
                  onChange={this.handleInputChange}
                  name="title1"
                />
                <SmTextbox
                  value={this.state.title2}
                  onChange={this.handleInputChange}
                  name="title2"
                />
                <SmTextbox
                  value={this.state.title3}
                  onChange={this.handleInputChange}
                  name="title3"
                />
                <SmTextbox
                  value={this.state.title4}
                  onChange={this.handleInputChange}
                  name="title4"
                />
                <SmTextbox
                  value={this.state.title5}
                  onChange={this.handleInputChange}
                  name="title5"
                />
                <SmTextbox
                  value={this.state.title6}
                  onChange={this.handleInputChange}
                  name="title6"
                />
                <SmTextbox
                  value={this.state.title7}
                  onChange={this.handleInputChange}
                  name="title7"
                />
              </Col>
              <Button btnType="primary" label="Submit" onClick={this.handleSubmit} />
              <Button btnType="danger" label="Cancel" onClick={this.closeModal} />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
