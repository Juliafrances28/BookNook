import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
// import Image from "../components/image/index";
import Button from "../components/Button/index";
import Header from "../components/Header/index";
import Card from "../components/Card/index";
import "./style.css";

function Books() {
  return (
    <div>
      <Container>
        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button></Button>
          </Row>
        </Card>

        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button></Button>
          </Row>
        </Card>

        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button></Button>
          </Row>
        </Card>

        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button> </Button>
          </Row>
        </Card>

        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button></Button>
          </Row>
        </Card>

        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button></Button>
          </Row>
        </Card>

        <Card>
          <Row>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81dvRHsl2KL.jpg"
                className="book"
                alt="book"
              />
            </div>
            <Header></Header>
            <Button></Button>
          </Row>
        </Card>
      </Container>
    </div>
  );
}
export default Books;
