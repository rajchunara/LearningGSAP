import React, { useRef, useState, useEffect } from "react";
import { BoxContainer } from "../Utility-Components/BoxContainer";
import { CenterContainer } from "../Utility-Components/CenterContainer";
import {
  Button,
  ButtonContainer
} from "../Utility-Components/ButtonComponents";
import gsap from "gsap";

const EaseComponent = () => {
  let tween;

  let blueBox = useRef(null);

  useEffect(() => {
    //There are different type of easing
    //To find more about it,
    //visit - https://greensock.com/get-started/#easing
    tween = gsap.to(blueBox, { duration: 1, ease: "back.out(1.7)", y: -100 });
  }, []);

  const startAnimation = () => {
    tween.restart();
  };

  const reverseAnimation = () => {
    tween.reverse();
  };

  return (
    <CenterContainer>
      <BoxContainer ref={(el) => (blueBox = el)}></BoxContainer>

      <ButtonContainer>
        <Button onClick={startAnimation}>Check ease</Button>
        <Button onClick={reverseAnimation}>reverse</Button>
      </ButtonContainer>
    </CenterContainer>
  );
};

export default EaseComponent;
