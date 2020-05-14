import React from "react";
import { Container, Row, Col } from "../Grid";
import { LinkButton } from "../Button";

export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function CollectionListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <h3>{props.description}</h3>
        </Row>
        <Row>
          <Col size="sm-10">
            <p>{props.title}</p>
          </Col>
          <Col size="sm-2">
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
            <Row className="quality">
              <p>{props.quality}</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <LinkButton label="Comments"/>
          <LinkButton label="Upvote"/>
          <LinkButton label="Downvote"/>
        </Row>
      </Container>
    </li>
  );
}

