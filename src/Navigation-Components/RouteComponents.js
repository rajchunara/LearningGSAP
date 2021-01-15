import React from "react";
import { Route } from "react-router-dom";

//Components
import GsapBasicsComponent from "../UI-Components/GsapBasics/GsapBasicsComponent";
import DefaultComponent from "../UI-Components/DefaultComponent";
import StaggeredAnimation from "../UI-Components/GsapStaggerd";

const RouteComponents = () => {
  return (
    <>
      <Route path="/" exact component={DefaultComponent} />
      <Route path="/gsap-basics" component={GsapBasicsComponent} />
      <Route path="/staggered" component={StaggeredAnimation} />
      {/* <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} /> */}
    </>
  );
};

export default RouteComponents;
