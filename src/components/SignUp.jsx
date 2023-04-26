import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SignUp = () => {
  const { registerEmailPassword, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formHandler = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      return setError("password dosen't match");
    } else if (password.length < 8) {
      setError("Password must be  8 characters");
      return;
    }

    registerEmailPassword(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setError("");
        setSuccess("Account created successfully");
        form.reset();
      })
      .catch((error) => setError(error.message));

    console.log(name, email, password, confirm);
  };
  return (
    <Container>
      <h4 className="text-center">Sign Up Here !</h4>
      <Form className="w-25 mx-auto" onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirm" placeholder="Password" />
        </Form.Group>
        <div className="d-flex flex-column">
          <p>
            <small className="text-danger">{error}</small>
            <small className="text-success  ">{success}</small>
          </p>
          <Button variant="primary" type="submit">
            Sign-Up
          </Button>
          <Form.Text className="text-muted">
            Already have a account?{" "}
            <Link to="http://localhost:5173/login">Login</Link>
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
