import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books";
import Navbar from "./components/Navbar/index";
import Reading from "./pages/Reading";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Reading} />
          <Route exact path="/BookNook" component={Reading} />
          <Route exact path="/Books" component={Books} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
