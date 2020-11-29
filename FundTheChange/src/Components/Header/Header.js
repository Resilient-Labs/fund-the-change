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
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Fund The Change</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/generalOrgs">Organizations</Nav.Link>
            <Nav.Link href="/login">Sign Up</Nav.Link>
            <Nav.Link href="/signup">Log In</Nav.Link>
          </Nav>
          <Nav>
            <Form inline className="Form">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search Organization</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      /*
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Fund The Change</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/generalOrgs">Organizations</Nav.Link>
      <Nav.Link href="/login">Sign Up</Nav.Link>
      <Nav.Link href="/signup">Log In</Nav.Link>
      </Nav>
      <Form inline className='Form'>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search Organization</Button>
      </Form>
      </Navbar.Collapse>
      </Navbar>

      */
      /* <NavDropdown title="More" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
      <NavDropdown.Divider />
      </NavDropdown>
      */
    );
  }

  // class Header extends Component {
  //   render() {
  //     return (
  //       <Navbar bg="dark" variant="dark">
  //         <Navbar.Brand href="#home">Fund The Change</Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="mr-auto">
  //             <Nav.Link href="#home">Home</Nav.Link>
  //             <Nav.Link href="#link">Organizations</Nav.Link>
  //             <NavDropdown title="More" id="basic-nav-dropdown">
  //               <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //             </NavDropdown>
  //           </Nav>
  //           <Search />
  //         </Navbar.Collapse>
  //       </Navbar>
  //     );
  //   }
}

export default Header;
