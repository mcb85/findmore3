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
    collections: [],
    description: "",
    type: "",
    titles: [],
    userId: "",
    show: false 
  };

  // openModal = (event) => {
  //   event.preventDefault();                  //TODO does not recognize $
  //   $(".new-collection").modal("toggle");
  // };

showModal = () => {
  this.setState({ show: true });
};

hideModal = () => {
  this.setState({ show: false });
};

  render() {
    return (
      <div>
      {/* <Modal show={this.state.show} handleClose={this.hideModal}>
      </Modal> */}
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
              onClick={this.showModal}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

 export default Profile;
// // const container = document.createElement("div");
// // document.body.appendChild(container);
// // ReactDOM.render(<Profile />, container);

// import React, { Component } from "react";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import Nav from "../components/Nav";
// import { List, CollectionListItem } from "../components/Results";
// import Modal from "../components/Modal";
// import { Button } from "../components/Button";
// const [setModalShow] = React.useState(false);

// class Profile extends Component {
//   state = {
//     collections: [],
//     description: "",
//     type: "",
//     titles: [],
//     userId: "",
//   };

//   openModal = (event) => {
//     event.preventDefault();
//     setModalShow(true);
//   };

//   componentDidMount() {
//     this.loadCollections();
//   }

//   loadCollections = (userId) => {
//     API.getCollectionByUserId()
//       .then(res => this.setState({ collections: res.data }))
//       .catch(err => console.log(err))
//   }

//   render() {
//     return (
//       <div>
//         <Nav />
//         <Container fluid>
//           <Row>
//             <Col>
//               {!this.state.collections.length ? (
//                 <h1 className="text-center">No collections to Display</h1>
//               ) : (
//                   <List>
//                     {this.state.collections.map((collection) => {
//                       return (
//                         <CollectionListItem
//                           description={collection.title}
//                           title={collection.title}
//                           quality={collection.href}
//                         />
//                       );
//                     })}
//                   </List>
//                 )}
//             </Col>
//           </Row>
//           <Row>
//             {/* <Modal
//               onClose={this.showModal}
//               show={this.state.show}
//               userId={this.props.userId}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
//               deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
//               non fuga omnis a sed impedit explicabo accusantium nihil
//               doloremque consequuntur.
//             </Modal> */}
//             <Button
//               btnType="primary toggle-button"
//               label="Create a New Collection"
//               onClick={this.openModal}
//             />
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Profile;