import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchBar() {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

class SiteNav extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogOut();
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Crush</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {this.props.loggedIn ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mr-auto">
              <Form onSubmit={this.handleSubmit} inline>
                <button
                  type="submit"
                  className="btn btn-outline-secondary btn-sm"
                >
                  logout
                </button>
              </Form>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        ) : null}
      </Navbar>
    );
  }
}

export default SiteNav;
