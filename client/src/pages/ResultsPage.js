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
// import UpVoteBtn from "../components/UpVoteBtn";
// import DownVoteBtn from "../components/DownVoteBtn";
// import SaveBtn from "../components/SaveBtn";

const styles = {
    border: "1px, solid, primary"
}

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        console.log(this.props.location.state.movies);

        this.state = {
            collection: [],
            // movies: this.props.location.state.movies,
            // upVotes: "",
            // downVotes: "",
            // saved: false,
            userId: 20,
            user: undefined
        }
        
        this.saveMoviesCollection = this.saveMoviesCollection.bind(this);
        this.addUpVote = this.addUpVote.bind(this);
        this.addDownVote = this.addDownVote.bind(this);
        // this.leaveComment = this.leaveComment.bind(this);
    }


    componentDidMount() {
        console.log("componentDidMount");
        console.log(this.props.location.state.movies);
        this.loadUser();
    }

    loadUser= async () => {
        const user = await API.getUserById(this.state.userId);
        console.log("Retrieved user: " + JSON.stringify(user.data));
        this.setState({ user: user.data });
    }
    
    addUpVote = (collection, e) => {
        e.preventDefault(); 
        console.log(collection.id);
        API.updateUpVotes(collection.id)
            .then(result => {
                console.log("addupvote result: " + JSON.stringify(result))
            } ).catch(err => console.log(err))
            console.log(collection.upVotes)
    }

    addDownVote = (collection, e) => {
        e.preventDefault();
        console.log(collection.id);
        API.updateDownVotes(collection.id)
            .then(result => {
                console.log("addDownvote result: " + JSON.stringify(result))
            }).catch(err => console.log(err))
        console.log(collection.downVotes)
    }
   
    saveMoviesCollection = (collection, e) => {
        e.preventDefault();
        console.log("state: " + JSON.stringify(this.state));
        const collections = this.state.user.savedCollections;
        console.log("collections: " + JSON.stringify(collections))
        collections.push(collection.id);
        console.log("collections2: " + JSON.stringify(collections))
        API.saveMoviesCollection(this.state.userId, collections)
            .then(result => {
                console.log("saved result: " + result);
            })
            .catch(err => console.log(err))
        alert("collection saved")
        console.log("the collection is: " + collection)
    }

    // leaveComment = (collection, e) => {
    //     e.preventDefault();
    //     API.createMoviesComments(data, collection.id)
    //         .then (result => {
    //         console.log("saved result: " + result);
    //     })
    //         .catch(err => console.log(err))
    
    //     {
    //     alert("adding comment")
    //     console.log('comment saved')
    //     }
        
    render() {
        const self=this
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
                                      SaveBtn={self.saveMoviesCollection.bind(this, movie)}
                                      upVoteBtn={self.addUpVote.bind(this, movie)}
                                      DownVoteBtn={self.addDownVote.bind(this,movie)}
                                    //   leaveComment={self.leaveComment.bind(this, movie)}
                                    //   viewComments={self.viewComments.bind(this, movie)}

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


              