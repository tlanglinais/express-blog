import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BlogsPage from "./Pages/BlogsPage";

import "./index.css";

const redirect = true;

// URL Paths
// / = Home
// /blogs = Blogs

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Route exact path="/">
          {redirect ? <Redirect to="/blogs" /> : ""}
        </Route>
        <Route exact path="/blogs" component={BlogsPage} />
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
