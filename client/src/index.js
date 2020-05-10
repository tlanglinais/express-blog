import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";

import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/blogs" component={Blogs} />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
