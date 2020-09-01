import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class UserHome extends Component {
  constructor(props) {
    super(props);

    const userData = jwt_decode(localStorage["jwtToken"]);
    this.state = userData;
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <Card.Header>{this.state.name}</Card.Header>
            <Card.Img variant="top" src="holder.js/100px180?" />
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>{this.state.age}</ListGroup.Item>
                <ListGroup.Item>{this.state.sex}</ListGroup.Item>
                <ListGroup.Item>{this.state.tagline}</ListGroup.Item>
                <ListGroup.Item>{this.state.email}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>posts</Card.Header>
            <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default UserHome;
