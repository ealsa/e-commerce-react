import React from "react";
import Card from "react-bootstrap/Card";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src={require("../assets/bg.jpg")}
          alt="background"
          height="600px"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <div className="container">
            <Card.Title className="display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </Card.Title>
            <Card.Text className="lead fs-2">
              CHECK OUT ALL THE TRENDS
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Products />
    </div>
  );
};

export default Home;
