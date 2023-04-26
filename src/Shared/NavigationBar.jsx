import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { signOut } from "firebase/auth";
import { FaSignOutAlt } from "react-icons/fa";
const NavigationBar = () => {
  const { user, pic, auth, setUser } = useContext(AuthContext);
  const handlelogOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // const [user, setUser] = useState(null);
  return (
    <Navbar bg="light" variant="light" className="mb-3 rounded">
      <Container>
        <Nav className="mx-auto navigation-bar">
          <NavLink to="/categories/0">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </Nav>
        {user && (
          <>
            <img
              className="rounded-circle me-4"
              style={{ width: "35px" }}
              src={pic}
              alt=""
            />
          </>
        )}
        {user ? (
          <div className="d-flex">
            <p className="me-4 my-auto">
              {!user?.displayName ? (
                <>{user.email}</>
              ) : (
                <>{user?.displayName}</>
              )}
            </p>

            <Button onClick={() => handlelogOut()} className="btn-danger">
              <FaSignOutAlt />
            </Button>
          </div>
        ) : (
          <Nav className="d-flex align-items-center">
            <FaUserCircle style={{ fontSize: "35px", marginRight: "5px" }} />
            <Link to="/login">
              <Button variant="dark">Login</Button>
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
