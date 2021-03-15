import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

///********nedd to secure posts with auth */


//this needs to be moved to a config file, or at least move all x site requests to one place.
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

// @render a post form.
// @props userId.
class PostForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            newpost:"Say something..",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // oune scource of truth for the form inputs.
    handleInputChange(e){
        e.preventDefault(e);
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e){
        e.preventDefault(e);

        const data = {
            post: this.state.newpost,
            posterid: this.props.posterId,
        }

        console.log(data);

        axios
            .post("/api/posts/newpost", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err)=> {console.log(err)});
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
                    name="newpost"
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

export default PostForm;



