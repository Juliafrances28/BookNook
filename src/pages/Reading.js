import React from "react";
import Hero from "../components/Hero/index";

class Reading extends React.Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://media.istockphoto.com/photos/cozy-window-nook-with-open-journal-and-coffee-picture-id1353475989?b=1&k=20&m=1353475989&s=170667a&w=0&h=FmzrjThqFfB8fDuMNQaufFDbFfB6H6Y9B_HEp2pg4sI=">
          <h1> BookNook </h1>
          <h2>
            {" "}
            The place to purchase and discuss the lastest trending reads{" "}
          </h2>
        </Hero>
      </div>
    );
  }
}

export default Reading;
