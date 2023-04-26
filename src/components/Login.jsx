import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const { loginHandler, setUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const loginFormHandler = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginHandler(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setError("");
        setSuccess("Account created successfully");
        form.reset();
      })
      .catch((error) => setError(error.message));
  };
  return (
    <Container>
      <h4 className="text-center">Login Here !</h4>
      <Form onSubmit={loginFormHandler} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-flex flex-column">
          <p>
            <small className="text-danger">{error}</small>
            <small className="text-success  ">{success}</small>
          </p>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-muted">
            Don't have a account? <Link to="/signUp">Register</Link>
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
