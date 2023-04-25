import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Shared/Header";
import RightNavBar from "../Shared/RightNavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const NewsDetails = () => {
  return (
    <Container>
      <Header />

      <Row>
        <Col lg={9}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <div className="sticky-top">
            <RightNavBar />
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default NewsDetails;
