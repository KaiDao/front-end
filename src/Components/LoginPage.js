import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//This Card renders when no user is logged in and the path is /.
class LoginPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: "enter Email",
      password: "password",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ensures that there is a single source of truth.
  handleInputChange(e) {
    e.preventDefault(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  //handles submit.
  //todo : add redirect.
  handleSubmit(e) {
    e.preventDefault(e);
    const data = {
      "email": this.state.email,
      "password": this.state.password,
    };
    this.props.handleLoggin(data);
  }

  render() {
    return (
      <Card style={{ width: "25rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form className="container" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="row">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={this.handleInputChange}
                placeholder={this.state.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="row">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={this.handleInputChange}
                placeholder={this.state.password}
              />
            </Form.Group>
            <Form.Group controlId="formText" className="row">
              <Form.Text className>
                <a className="col" href="/CreateAccount">
                  New User?
                </a>
                <a className="col" href="/ForgotPassword">
                  Forgot password?
                </a>
              </Form.Text>
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

export default LoginPage;
