import React, { useRef, useEffect } from "react";
import "./home.css";
import gsap from "gsap";

import styled from "styled-components";
import {
  ButtonContainer,
  Button
} from "../../Utility-Components//ButtonComponents";

const BlueBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #5388df;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f1f1f;
`;

const GreenBox = styled(BlueBox)`
  background-color: #53e28a;
`;

//Basic steps to get started with gsap in react
//First get create variable to store the reference of the dom element
//assign the variable = useRef(null), as dom is not loaded
//In JSX, use ref={el => variable = el} to assign varible
//Use react hook useEffect to initiate the gsap

//Gsap has basic functions, to(), from() and fromTo()
//Gsap basic Tween animation is defined as,
//gsap.to(element,{css propterties, special properties like duration})
//gsap
const GsapBasicsComponent = () => {
  let redSquare = useRef(null);
  let blueSquare = useRef(null);
  let greenSquare = useRef(null);

  // useEffect(() => {}, [redSquare]);

  const onStartAnimation = () => {
    gsap.from(redSquare, { x: 400, duration: 1 });
    gsap.to(blueSquare, {
      x: 200,
      y: -200,
      duration: 0.5,
      delay: 0.9
    });

    //fromTo() makes element jump from starting css position to from{location} position
    // and then animate to to{location} which should be taken care of
    gsap.fromTo(
      greenSquare,
      { x: 100, backgroundColor: "#53e28a" },
      { x: -100, duration: 1, backgroundColor: "#ed936f" }
    );
  };

  const resetAnimation = () => {
    gsap.to(blueSquare, { x: 0, y: 0, duration: 0.5 });
    gsap.to(greenSquare, {
      x: 0,
      y: 0,
      backgroundColor: "#53e28a",
      duration: 0.5
    });
  };

  return (
    <div className="home-component">
      <div
        className="red-square"
        ref={(el) => {
          redSquare = el;
        }}
      >
        {" "}
        from(){" "}
      </div>
      <BlueBox
        ref={(el) => {
          blueSquare = el;
        }}
      >
        to()
      </BlueBox>
      <GreenBox ref={(el) => (greenSquare = el)}>fromTo()</GreenBox>

      <ButtonContainer>
        <Button className="start-btn" onClick={onStartAnimation}>
          Start Animation
        </Button>

        <Button onClick={resetAnimation}>Reset</Button>
      </ButtonContainer>
    </div>
  );
};

export default GsapBasicsComponent;
