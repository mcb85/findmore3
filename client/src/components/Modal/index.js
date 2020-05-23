import React, {useState, Component } from "react";
import { Container, Col } from "../Grid";
import { SmTextbox, LgTextbox } from "../Textbox";
import { Button } from "../Button";
import API from "../../utils/API";
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';

class MyModal extends Component {
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
    userId: this.props.userId,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.description &&
      this.state.title1 &&
      this.state.title2 &&
      this.state.title3
    ) {
      API.createCollection({
        description: this.state.description,
        title1: this.state.title1,
        title2: this.state.title2,
        title3: this.state.title3,
        title4: this.state.title4,
        title5: this.state.title5,
        title6: this.state.title6,
        title7: this.state.title7,
        userId: 1,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("A collection must have a description and 3 titles");
    }
  };


  render() {
    const { onRequestClose } = this.props;
    return (
      <Modal
        onRequestClose={onRequestClose}
        effect={Effect.Newspaper}
        style={{
          overlay:{overflow: 'auto'},
          content: { overflow: 'auto' }
        }}  >
        
        <Container>
          <h1>Create a Collection</h1>
          <br></br>
          <br></br>
          <Col size="sm-12">
            <h4>What kind of collection are you making?</h4>

            <LgTextbox
              label="Describe what your collection is about"
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder="What's the vibe?"
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
            <br></br>
            <button className="btn btn-primary" style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} onClick={
              this.handleSubmit
            }>Submit</button>
            <span></span>
            <button className="btn btn-danger" style={ {borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} onClick={ModalManager.close}>Close Modal</button></Col></Container>
        <br></br>
      </Modal>
    );
  }
}
export default MyModal;









 




