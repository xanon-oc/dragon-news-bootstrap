import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Form className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter email" />
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
          <Button variant="primary" type="submit">
            Submit
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
