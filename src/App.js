import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <React.Fragment>
      <Loading />
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default App;
