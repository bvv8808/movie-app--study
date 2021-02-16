import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Detail from "./Screens/Detail";
import Navigation from "./components/Navigation";

export default () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie/:id" exact={true} component={Detail} />
    </HashRouter>
  );
};
