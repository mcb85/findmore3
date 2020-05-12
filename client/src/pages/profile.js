import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { List, CollectionListItem } from "../components/Results";
//import Modal from "../components/Modal";
import { Button, LinkButton } from "../components/Button";

class Profile extends Component {
  state = {
    collections: [],
    description: "",
    type: "",
    titles: [],
  };

  // openModal = (event) => {
  //   event.preventDefault();
  //   $(".new-collection").modal("toggle");
  // };

  render() {
    return (
      <div>
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
              onClick={this.openModal}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
