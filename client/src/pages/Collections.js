import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { List, CollectionListItem } from "../components/Results";
import MyModal from "../components/Modal";
// import { Button } from "../components/Button";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import Jumbotron from "../components/Jumbotron 3";


class Collections extends Component {
   
    state = {
        collections: [],
        userId: 1,
        show: false,
        onHide: false
    };

    openModal() {
        ModalManager.open(<MyModal onRequestClose={() => true} />);


    }

    componentDidMount() {
        this.loadCollections();
    }

    loadCollections = (e) => {
        console.log("user id:" + this.state.userId)
        API.getMoviesCollectionByUserId(this.state.userId)
            .then(res => this.setState({ collections: res.data }))
            .catch(err => {
                console.log(err)
                console.log("getMovieCollectionsbyUser error returned: " + JSON.stringify(err.message))
            })
    }

  

    render() {
        return (
            <div>
                <Nav />
                <Jumbotron>
                <h1 className="text-white">Collections</h1>
                </Jumbotron>
                     <Container fluid>
                    <Row>
                        <Col size="sm-10"><div><button type="button" className=" btn btn-primary" style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} onClick={this.openModal.bind(this)}>Create Collection</button> </div></Col>
                        </Row>

                        <Row>
                            <Col size="md-6"><h1 className="text-center">Collections Created by You</h1> 
                            {this.state.collections.length ? (
                                <List>
                                   
                                            {this.state.collections.map((collection) => {
                                                return (
                                                    
                                                    <CollectionListItem key={collection["id"]}
                                                        id ={collection.id}
                                                        description={collection.description}
                                                        title1={collection.title1}
                                                        title2={collection.title2}
                                                        title3={collection.title3}
                                                        title4={collection.title4}
                                                        title5={collection.title5}
                                                        title6={collection.title6}
                                                        title7={collection.title7}
                                                        upVotes={collection.upVotes}
                                                        downVotes={collection.downVotes}
                                                        quality={collection.href3}
                                                    />
                                                );
                                            })}
                                        </List>
                                ) : (
                                        
                            <h1 className="text-center">No collections to Display</h1>
                                    )}</Col>
                            
                        <Col size="sm-6"><h1 className="text-center">Collections You Saved</h1></Col>
                        
                        </Row>
                        <br></br>
                        
                        
                   
                    
</Container>
                
                
                
            </div>
        );
    }
}




   
                        
                            


export default Collections;

