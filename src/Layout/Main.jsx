import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import LeftNavBar from "../Shared/LeftNavBar";
import { Outlet } from "react-router-dom";
import RightNavBar from "../Shared/RightNavBar";
import NavigationBar from "../Shared/NavigationBar";

const Main = () => {
  return (
    <Container>
      <Header />
      <NavigationBar />
      <Row>
        <Col lg={3}>
          <LeftNavBar />
        </Col>
        <Col lg={6}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <RightNavBar />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Main;
