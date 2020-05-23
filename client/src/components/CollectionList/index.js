import React from "react";
import { Container, Row, Col } from "../Grid";
import { LinkButton } from "../Button";
import UpVoteBtn from "../UpVoteBtn";
import DownVoteBtn from "../DownVoteBtn";
import Jumbotron from "../Jumbotron 3";
import SaveBtn from "../SaveBtn";
export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function CollectionListItem(props) {
  return (
    <Container>
      {props.movies}
      <li className="list-group-item bg-white text-primary" style={{ borderRadius: 10 }}>
        <Jumbotron></Jumbotron>
        <Row>
          <h3 style={{ justifyContent: "center" }} className="text-center">Collection Description: {props.description}</h3>
        </Row>
        <br></br>
        <Row>
          <Col size="sm-10">
            <p>{props.title1}</p>
          </Col>
        </Row>

        <Row>
          <Col size="sm-10">
            <p>{props.title2}</p>
          </Col>
        </Row>
        <Row>
          <Col size="sm-10">
            <p>{props.title3}</p>
          </Col>
        </Row>

        <Row>
          <Col size="sm-10">
            <p>{props.title4}</p>
          </Col>
        </Row>
        <Row>
          <Col size="sm-10">
            <p>{props.title5}</p>
          </Col>
        </Row>
        <Row>
          <Col size="sm-10">
            <p>{props.title6}</p>
          </Col>
        </Row>
        <Row>
          <Col size="sm-10">
            <p>{props.title7}</p>
          </Col>
        </Row>
        <Row>
          <Col size="sm-5">
            <p>Upvotes: {props.upVotes}</p>
          </Col>
          <Col size="sm-5">
            <p>Downvotes: {props.downVotes}</p>
          </Col>
        </Row>

        {/* <Row className="quality">
          <p>Quality: {props.quality}</p>
         </Row> */}
        <br></br>
        <br></br>
        <Col size="sm-7">
          <Row>
            <Col size="sm-3"><UpVoteBtn label="Upvote" /></Col>
            <Col size="sm-3"><DownVoteBtn label="Downvote" /></Col>
            <Col size="sm-3"><button className="btn btn-primary text-white" label="View Comments" style={{ borderRadius: 5, padding: 10, }}>View Comments</button></Col>
            <Col size="sm-3"><SaveBtn label="Save"></SaveBtn></Col>
          </Row>
        </Col>



      </li>
      <br></br>
    </Container>
  );
}

