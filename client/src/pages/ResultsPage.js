import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
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

         this.state ={
             upVotes: "",
             downVotes: "",
         }
    }


    componentDidMount() {
        console.log("componentDidMount");
        console.log(this.props.location.state.movies);
    }
    
    addUpVote= () => {
        API.updateUpVotes(this.state.upVotes)
            .then(this.setState({ upVotes: this.state.upVotes + 1 }))
            .catch(err => console.log(err))
    }

    addDownVote = () => {
        API.updateDownVotes(this.state.DownVotes)
            .then(this.setState({ downVotes: this.state.downVotes + 1 }))
            .catch(err => console.log(err))
    }
   
    render() {
        return (
            <Container fluid>
                <Nav />
                <Jumbotron>
                    <h1 className="text-primary">Collections Containing "{this.props.location.state.title}"</h1>
                </Jumbotron>

                        {this.props.location.state.movies ? (
                            <Col size="md-12">
                            <List>
                              {this.props.location.state.movies.map((movie) => (
                                  <CollectionListItem
                                      key={movie["id"]}
                                      id={movie.id}
                                      description={movie.description}
                                      title1={movie.title1}
                                      title2={movie.title2}
                                      title3={movie.title3}
                                      title4={movie.title4}
                                      title5={movie.title5}
                                      title6={movie.title6}
                                      title7={movie.title7}
                                      upVotes={movie.upVotes}
                                      downVotes={movie.downVotes}
                                      quality={movie.href3}
                                  />
    
                              ))}
                            
                        </List></Col>            
                        ) : ( <h3> No Results to Display</h3> 
                    )} 
               
                
            
                
                
                 
               

            </Container>
        );
    }
}

export default ResultsPage;


              