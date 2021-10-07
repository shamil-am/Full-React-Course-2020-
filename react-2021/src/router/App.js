import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import SinglePerson from "./SinglePerson";

////////////////////
const App = () => {
  return (
    <div className="container">
      <h1 className="text text-danger text-center">
        <Link to="/">React Router</Link>
      </h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-group-item">
          <Link to="/people">People</Link>
        </li>
      </ul>
      <hr />
      <div className="bg bg-info">
        <Switch>
          <Route exact path="/">
            <h1>Welcome!</h1>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route path="/people/:id">
            <SinglePerson />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
