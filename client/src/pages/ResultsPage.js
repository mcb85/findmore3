import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import Nav from "../components/Nav";
import Home from "./Home";
import { CollectionListItem, List } from "../components/CollectionList";
import Card from "../components/Card";
//import LinkButton from "../components/Button";
import UpVoteBtn from "../components/UpVoteBtn";
import DownVoteBtn from "../components/DownVoteBtn";

const styles = {
    border: "1px, solid, primary"
}

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        console.log(this.props.location.state.movies);

        // this.state ={

        // }
    }


    componentDidMount() {
        console.log("componentDidMount");
        console.log(this.props.location.state.movies);
    }

    render() {
        return (
            <Container fluid>
                <Nav />
                <Jumbotron>
                    <h1>Collections Containing "{this.props.location.state.title}"</h1>
                </Jumbotron>
                
                    <Col size="md-12">
                        {this.props.location.state.movies ? (

                                <List>
                              {this.props.location.state.movies.map((movie) => (
                            <Card class="list-bordered border-primary " key={movie["id"]}>
                               <strong>Collection Id: {movie.id} </strong>
                            <br></br>
                             <p>Collection Description: {movie["description"]}</p>
                                <br></br>
                                <strong><p>Movies in this Collection</p></strong>
                                      <Row style={styles} className="row-bordered border-primary">
                                    <Col size="md-12">
                                        <p >{movie.title1}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <p>{movie.title2}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <p>{movie.title3}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <p>{movie.title4}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <p>{movie.title5}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <p>{movie.title6}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <p>{movie.title7}</p>
                                          
                                          </Col>
                                         
                                      </Row>    
                                      
                                      
                                      <Row>
                                          <Col size="md-6">
                                           <UpVoteBtn label="UpVote" /> 
                                          </Col> 
                                          
                                          <DownVoteBtn label="DownVote"/>
                                          {/* <p>{movie.upVotes}</p> */}
                                         
                                         {/* // <LinkButton label="Comments" />
                                          //<LinkButton label="Upvote" /> */}
                                         </Row> 
                            </Card>
                        ))}      

                                </List>
                        ) : ( <h3> No Results to Display</h3> 
                        
                        )}
                </Col>
                
                 
               

            </Container>
        );
    }
}

export default ResultsPage;


              