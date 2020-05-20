import React from "react";
import { Container, Row, Col } from "../Grid";
import { LinkButton } from "../Button";

export function List({ children }) {
  
  return (
    <div className="list-overflow-container">
      <ul className="list-group ul-bordered border-primary">{children}</ul>
    </div>
  );
}

export function CollectionListItem(children) {
  return <li className="list-group-item">{children}</li>;
  }

  
