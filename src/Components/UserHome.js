import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"

class UserHome extends Component {
  constructor(props) {
    super(props);

    const userData = jwt_decode(localStorage["jwtToken"]);
    this.state = userData;
  }

  render() {
    return (
      <Card>
        <Card.Header>{this.state.name}</Card.Header>
        <Card.Img variant="top" src="holder.js/100px180?"/>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item >{this.state.age}</ListGroup.Item>
            <ListGroup.Item >{this.state.sex}</ListGroup.Item>
            <ListGroup.Item >{this.state.tagline}</ListGroup.Item>
            <ListGroup.Item >{this.state.email}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default UserHome;
