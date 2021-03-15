import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

import jwt_decode from "jwt-decode";

///********nedd to secure posts with auth */


//this needs to be moved to a config file, or at least move all x site requests to one place.
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';


// @render a post and comments
// @props poster id,post,comments 
class Post extends Component {
    render(){
      return(
        <div>
          <Card>
            <Card.Header>{this.props.posterid}</Card.Header>
            <Card.Body>
              {this.props.post}
            </Card.Body>
            <Card.Footer>
              {this.props.comment}
            </Card.Footer>
        </Card>
      </div>
      );
    }
}

// @render PostList
// makes a with a postform first list of posts based on user
// @props typeOfPostList
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postlist : [],
    }

    this.getPostList = this.getPostList.bind(this);

    this.getPostList();
  }

  getPostlistList(){



  }

  render() {
    return (
      <div>
        {
          this.state.postlist.forEach((post,index) => {
            post.render();
          })
        }
      </div>
    );
  }
}


export default PostList;
