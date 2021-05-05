import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Contact from "./pages/Contact/Contact";
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
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
