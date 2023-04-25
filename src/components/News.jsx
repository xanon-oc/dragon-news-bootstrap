import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const newsData = useLoaderData();
  const { image_url, title, details, category_id } = newsData;
  return (
    <div>
      <h6>Dragon News</h6>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
