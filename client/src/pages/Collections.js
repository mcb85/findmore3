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
        savedCollections: [],
        userId: 19,
        show: false,
        onHide: false
    };

    openModal() {
        ModalManager.open(<MyModal onRequestClose={() => true} />);
    }

    componentDidMount() {
        this.loadCollections();
        this.loadSavedCollections();
    }

    loadCollections = (e) => {
        // e.preventDefault();
        console.log("user id:" + this.state.userId)
        API.getMoviesCollectionByUserId(this.state.userId)
            .then(res => this.setState({ collections: res.data }))
            .catch(err => {
                console.log(err)
                console.log("getMovieCollectionsbyUser error returned: " + JSON.stringify(err.message))
            })
    }

    loadSavedCollections = (e) => {
        // e.preventDefault(); 
        console.log("load saved collections" + this.state.userId)
        API.getSavedCollectionsByUserId(this.state.userId)
            .then((res) => {
                console.log("saved collections: " + JSON.stringify(res.data));
                this.setState({ savedCollections: res.data });
            })
            .catch(err => {
                console.log(err)
                console.log("get saved collections by user id error returned " + JSON.stringify(err.message))
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
<Container>
                    <Row>
                        <Col size="md-6"><h1 className="text-center">Collections Created by You</h1>
                            {this.state.collections.length ? (
                                <List>

                                    {this.state.collections.map((collection) => {
                                        return (

                                            <CollectionListItem key={collection["id"]}
                                                id={collection.id}
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

                        <Col size="sm-6"><h1 className="text-center">Collections You Saved</h1>
                            {this.state.savedCollections.length ? (
                                <List>

                                    {this.state.savedCollections.map((savedCollection) => {
                                        return (

                                            <CollectionListItem key={savedCollection["id"]}
                                                id={savedCollection.id}
                                                description={savedCollection.description}
                                                title1={savedCollection.title1}
                                                title2={savedCollection.title2}
                                                title3={savedCollection.title3}
                                                title4={savedCollection.title4}
                                                title5={savedCollection.title5}
                                                title6={savedCollection.title6}
                                                title7={savedCollection.title7}
                                                upVotes={savedCollection.upVotes}
                                                downVotes={savedCollection.downVotes}
                                                quality={savedCollection.href3}
                                            />
                                        );
                                    })}
                                </List>
                            ) : (

                                    <h1 className="text-center">No collections to Display</h1>
                                )}</Col>

                        
                        
                        
                        
        
                                
                    </Row>
                    <br></br>


</Container>

                </Container>



            </div>
        );
    }
}









export default Collections;

