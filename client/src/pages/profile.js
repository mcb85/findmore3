import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { List, CollectionListItem } from "../components/CollectionList";
//import Modal from "../components/Modal"; //TODO Has Errors
import { Button} from "../components/Button";

class Profile extends Component {
  state = {
    userId: "",
    
  };

 



  render() {
    return (
      <div>
      
        <Nav />
        <Container fluid>
          <Row>
            <Col size="sm-12">
                <List>
                  
                </List>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}

 export default Profile;
