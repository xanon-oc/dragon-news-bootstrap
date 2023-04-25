import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";

const LoginSignUp = () => {
  return (
    <Container>
      <div className="sticky-top">
        <NavigationBar />
      </div>
      <Row>
        <Col lg={12}>
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default LoginSignUp;
