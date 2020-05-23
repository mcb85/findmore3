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
        description: "",
        type: "",
        titles: [],
        userId: this.props.userId,
        show: false,
        onHide: false
    };

    openModal() {
        // const modalBody = this.refs.input.value;
        ModalManager.open(<MyModal onRequestClose={() => true} />);


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
            <div>
                <Nav />
                <Jumbotron>
                <h1>Collections</h1>
                </Jumbotron>
                     <Container fluid>
                        <Row>
                            <Col size="md-12">
                            {this.state.collections.length ? (
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
                                ) : (
                                        
                            <h1 className="text-center">No collections to Display</h1>
                             )}
                        
                        </Col>
                        </Row>
                    <Col size="sm-10"><div><button type="button" className=" btn btn-primary" style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} onClick={this.openModal.bind(this)}>Create Collection</button> </div></Col>
                    
</Container>
                
                
                
            </div>
        );
    }
}



 //ReactDOM.render(<Collections/>, document.getElementById('main'));






// class Collections extends Component {
//     state = {
//         collections: [],
//         description: "",
//         type: "",
//         titles: [],
//         userId: "",
//         show: false,
//         onHide: false
//     };


//     showModal = e => {
//         this.setState({ show: true });
//     };

    // hideModal = e => {
    // this.setState({ show: false });
    //  }


    // componentDidMount() {
    //     this.loadCollections();
    // }

    // loadCollections = (userId) => {
    //     API.getMoviesCollectionByUserId(userId)
    //         .then(res => this.setState({ collections: res.data }))
    //         .catch(err => console.log(err))
    //}

    // render() {
    //     return (
    //         <main>
    //             <Nav />
    //             <Container fluid>
    //                 <Row>
    //                     <Col size="md-12">
    //                         <button className="btn btn-primary toggle-button" id="centered-toggle-button" onClick={e => {
    //                             this.showModal(e);
    //                         }}
    //                         > Create a Collection </button>

    //                         {!this.state.collections.length ? (
    //                             <h1 className="text-center">No collections to Display</h1>
    //                         ) : (
    //                                 <List>
    //                                     {this.state.collections.map((collection) => {
    //                                         return (
    //                                             <CollectionListItem
    //                                                 description={collection.title}
    //                                                 title={collection.title}
    //                                                 quality={collection.href}
    //                                             />
    //                                         );
    //                                     })}
    //                                 </List>
    //                             )}
    //                     </Col>
    //                 </Row>
    //                 <Row>
    //                     <MyModal class="modal"
    //                         show={this.state.show}  onHide={this.hideModal}
    //                         size="lg"
    //                         aria-labelledby="contained-modal-title-vcenter"
    //                         centered
    //                         userId={this.state.userId}>
                        
                            
//                         {/* <Modal.Header closeButton>
//                         <Modal.Title id="contained-modal-title-vcenter">
//                         Currate a Collection
//                         </Modal.Title>
//                         </Modal.Header>    
//                              */}
//                             {/* <Modal.Body>
                            
//                                 <p> </p>
//                             </Modal.Body> */}
//             </MyModal>
//                     </Row>
//                 </Container>
//             </main>
//         );
//     }
// }

export default Collections;

