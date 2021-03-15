import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

import PostList from "./Posts/Post";
import PostForm from "./Posts/PostForm";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// @render: user info and there personal posts, comments TODO: creat a feed. 
// @props : none data for the user is passed as the localStorage in the jwttoken recived from login.  
class UserHome extends Component {
  constructor(props) {
    super(props);

    const userData = jwt_decode(localStorage["jwtToken"]);//decodes user data from the token.
    this.state = userData;

    //console.log(userData);
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
          <PostForm posterId = {this.state.id}/>
          <PostList posterId= {this.state.id}/>
        </Col>
      </Row>
    );
  }
}

export default UserHome;
