import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  //   const [user, setUser] = useState(null);
  return (
    <Navbar bg="light" variant="light" className="mb-3">
      <Container>
        <Nav className="mx-auto navigation-bar">
          <NavLink to="/categories/0">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </Nav>
        {user ? (
          <div className="d-flex">
            <p className="me-4 my-auto">{user?.displayName}</p>

            <Button variant="dark">Log Out</Button>
          </div>
        ) : (
          <Nav className="d-flex align-items-center">
            <FaUserCircle style={{ fontSize: "35px", marginRight: "5px" }} />
            <Button variant="dark">Login</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
