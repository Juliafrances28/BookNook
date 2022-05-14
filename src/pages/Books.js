import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
// import Image from "../components/image/index";
import Button from "../components/Button/index";
import Header from "../components/Header/index";
import Card from "../components/Card/index";

import "./style.css";

// class Books extends React.Component() {
//  render() {
function Books() {
  return (
    <div>
      <Container>
        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button></Button>
          </Card>
        </Row>

        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button></Button>
          </Card>
        </Row>

        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button></Button>
          </Card>
        </Row>

        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button> </Button>
          </Card>
        </Row>
      </Container>
      <Container>
        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button></Button>
          </Card>
        </Row>

        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button></Button>
          </Card>
        </Row>

        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button></Button>
          </Card>
        </Row>

        <Row>
          <Card>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
              className="book"
              alt="book"
            />
            <Header></Header>
            <Button> </Button>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Books;
