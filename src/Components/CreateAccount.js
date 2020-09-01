import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "Enter email",
      name: "Name",
      age: "age",
      gender: "male",
      tagline: "say somthing?",
      password: "password",
      password2: "repeat password"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(e){
    e.preventDefault(e)

    const data = {
      "email" : this.state.email,
      "name" : this.state.name,
      "age" : this.state.age,
      "sex" : this.state.gender,
      "tagline" : this.state.tagline,
      "password" : this.state.password,
      "password2" : this.state.password2,
    }

    //todo : perform a request to server

    axios.post("/api/users/register", data)
    .then(function (response) {console.log(response);})
    .catch(function (error) {console.log(error);});

    //console.log(data);

    this.props.history.push("/")
  }

  render() {
    return (
      <Card>
        <Card.Header>New User</Card.Header>
        <Card.Body>
          <Form className="container" onSubmit={this.handleSubmit}>
            <Form.Group controlId="email" className="row">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={this.handleInputChange} placeholder={this.state.email} />
            </Form.Group>

            <Form.Group controlId="name" className="row">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={this.handleInputChange} placeholder={this.state.name} />
            </Form.Group>

            <Form.Group controlId="age" className="row">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" name="age"onChange={this.handleInputChange} placeholder={this.state.age} />
            </Form.Group>

            <Form.Group controlId="sex" className="row">
              <Form.Label>Gender</Form.Label>
              <Form.Control name="gender" onChange={this.handleInputChange} as="select">
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="tagLine" className="row">
              <Form.Label>Tag Line</Form.Label>
              <Form.Control as="textarea" name="tagline" rows="3" onChange={this.handleInputChange} type="text" placeholder={this.state.tagline}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="row">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={this.handleInputChange} placeholder={this.state.password} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="row">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="password" name="password2"onChange={this.handleInputChange} placeholder={this.state.password2} />
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

export default withRouter(CreateAccount);
