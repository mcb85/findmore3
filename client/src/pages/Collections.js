import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { List, CollectionListItem } from "../components/Results";
import Modal from "../components/Modal";
// import { Button } from "../components/Button";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';


class Collections extends Component {
    state = {
        collections: [],
        description: "",
        type: "",
        titles: [],
        userId: "",
        show: false,
        onHide: false
    };


    showModal = e => {
        this.setState({ show: true });
    };

    hideModal = e => {
    this.setState({ show: false });
     }


    componentDidMount() {
        this.loadCollections();
    }

    loadCollections = (userId) => {
        API.getMoviesCollectionByUserId(userId)
            .then(res => this.setState({ collections: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <main>
                <Nav />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <button className="btn btn-primary toggle-button" onClick={e => {
                                this.showModal();
                            }}
                            > Create a Collection </button>

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
                        <Modal class="modal"
                            show={this.state.show}  onHide={this.hideModal}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            userId={this.state.userId}>
                        
                            
                        {/* <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Currate a Collection
                        </Modal.Title>
                        </Modal.Header>    
                             */}
                            {/* <Modal.Body>
                            
                                <p> </p>
                            </Modal.Body> */}
            </Modal>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Collections;

