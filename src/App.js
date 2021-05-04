import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <Router>
      <Loading />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
