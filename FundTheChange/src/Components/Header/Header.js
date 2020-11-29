import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = props.loggedIn;
    console.log(props, "THIS IS FROM HEADER");
  }

  logOut = () => {
    console.log("Click");
    fetch("/logout").then((data) => (window.location.href = "/"));
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Fund The Change</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/generalOrgs">Organizations</Nav.Link>
            {this.loggedIn === true ? (
              <Button variant="outline-success" onClick={this.logOut}>
                Log Out
              </Button>
            ) : (
              <Button variant="outline-success" href="/login">
                Log In
              </Button>
            )}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search Organization</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
