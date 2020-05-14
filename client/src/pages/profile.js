import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { List, CollectionListItem } from "../components/Results";
//import Modal from "../components/Modal"; //TODO Has Errors
import { Button} from "../components/Button";

class Profile extends Component {
  state = {
    collections: [],
    description: "",
    type: "",
    titles: [],
    show: false 
  };

  // openModal = (event) => {
  //   event.preventDefault();                  //TODO does not recognize $
  //   $(".new-collection").modal("toggle");
  // };

showModal = () => {
  this.setState({ show: true });
};

hideModal = () => {
  this.setState({ show: false });
};

  render() {
    return (
      <div>
      {/* <Modal show={this.state.show} handleClose={this.hideModal}>
      </Modal> */}
        <Nav />
        <Container fluid>
          <Row>
            <Col size="sm-12">
              {!this.state.collections.length ? (
                <h1 className="text-center">No collections to Display</h1>
              ) : (
                <List>
                  {this.state.collections.map((collection) => {
                    return (
                      <CollectionListItem
                        description={collection.title}
                        title={collection.title}
                        quality={collection.href}
                      />
                    );
                  })}
                </List>
              )}
            </Col>
          </Row>
          <Row>
            {/* <Modal id="new-collection" userId=""/> */}
            <Button
              btnType="primary"
              label="Create a New Collection"
              onClick={this.showModal}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

 export default Profile;
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Profile />, container);