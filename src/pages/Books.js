import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Image from "../components/image/index";
import Button from "../components/Button/index";
import Header from "../components/Header/index";
import Card from "../components/Card/index";

class Books extends React.Component() {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card>
              <Image />
              <Header></Header>
              <Button></Button>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
