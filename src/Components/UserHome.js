import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class UserHome extends Component {
  constructor(props) {
    super(props);

    const userData = jwt_decode(localStorage["jwtToken"]);
    this.state = userData;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault(e);
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <Card.Header>{this.state.name}</Card.Header>
            <Card.Img variant="top" src="holder.js/150px180?" />
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
            <Card.Header>New Post!</Card.Header>
            <Card.Body>
              <Form className="container" onSubmit={this.handleSubmit}>
                <Form.Group controlId="newpost" className="row">
                  <Form.Control
                    as="textarea"
                    name="new post"
                    rows="3"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder={this.state.newpost}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>posts</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default UserHome;
