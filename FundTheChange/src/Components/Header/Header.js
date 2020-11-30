import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Search from "./Search";

const logOut = () => {
  console.log('Clicked and trying to logout');
  fetch('/logout');

  window.localStorage.clear();
  window.location.href = '/';
};

const Account = () => {
  return (
    <>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Button onClick={logOut}>Log Out</Button>
    </>
  );
};

const Guest = () => {
  return (
    <>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
        <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </>
  );
};

const Header = (props) => {
  const [loggedIn, setLoggedIn] = useState([]);

  useEffect(() => {
      setLoggedIn(loggedIn, "There is a User");
    }, [props.user]); //<--Keep this array empty for only one update

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Fund The Change</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/generalOrgs">Organizations</Nav.Link>
          {/*
            The statement below will check to see if the user is s logged in
            If they are logged in it will show links associated with their account
          */}
          {props.user.length > 0 ? <Account /> : <Guest />}
        </Nav>
        <Nav>
          <Search />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
