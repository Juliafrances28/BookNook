import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Books} />
        <Route exact path="/React" component={Books} />
      </div>
    </Router>
  );
}

export default App;
