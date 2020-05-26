import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { List, CollectionListItem } from "../components/CollectionList";
//import Modal from "../components/Modal"; //TODO Has Errors
import { Button} from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

class Profile extends Component {
  state = {
    userId: 19,
    
  };

 
//   componentDidMount = () => {
//     loadUserName();
// }

  // loadUserName = () => {
  //API.loadUserName
  // }

  render() {
    return (
      <div>
      
        <Nav />
        <Container fluid>
           <Jumbotron>
              <h1 className="text-center">Welcome {this.state.username}</h1> 
            </Jumbotron>
          <Row>
            <Col size="sm-12 mx-10">
                
              <Card>
                
                <p className="mx-10">Member Since: </p>
                </Card>
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

