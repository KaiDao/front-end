import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import jwt_decode from "jwt-decode";

// @render a post and comments
// @props
class Post extends Component {
    constructor(props){
        super(props);

    }
}

// @render a post form.
// @props userId.
class PostForm extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
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
        );
    }
}

// @render PostList
// makes a with a postform first list of posts based on user
// @props typeOfPostList
class PostList extends Component {
    constructor(props){
        super(props);



    }


    render(){
        return(

        );
    }
}