import React, { useRef, useState, useEffect } from "react";
import { BoxContainer } from "../Utility-Components/BoxContainer";
import { CenterContainer } from "../Utility-Components/CenterContainer";
import {
  Button,
  ButtonContainer
} from "../Utility-Components/ButtonComponents";
import gsap from "gsap";
import styled from "styled-components";

const GreenContainer = styled(BoxContainer)`
  background-color: #53e28a;
`;

const RedContainer = styled(BoxContainer)`
  background-color: #ef5350;
`;

const GsapTimeline = () => {
  let blueBox = useRef(null);
  let greenBox = useRef(null);
  let redBox = useRef(null);

  //first declare timeline, add defaults if there
  //then use method chaining to add tweens
  let timeline = gsap.timeline({ defaults: { duration: 0.5 }, paused: true });

  useEffect(() => {
    timeline.add(gsap.to(blueBox, { x: -200 }));
    timeline.add(gsap.to(blueBox, { scale: 1.25 }));
    timeline.add(gsap.from(greenBox, { y: -400, rotateZ: 90 }));
    timeline.add(gsap.from(redBox, { x: 200, rotateZ: 90 }));
    timeline.add(gsap.to(blueBox, { x: 0, rotate: 90, scale: 1 }));

    //We can use method chaining
    //timeline.to(blueBox, { x: -200, duration: 0.5 })
    //        .to(blueBox, { scale: 1.25, duration: 0.5 })
    //        .from(greenBox, { y: -400, rotateZ: 90, duration: 0.5 })
    //        .from(redBox, { x: 200, rotateZ: 90, duration: 0.5 })
  }, []);

  //There are multiple functions we can perform on timeline like
  //play(), pause(), resume(), reverse(), restart()
  const startAnimation = () => {};

  return (
    <CenterContainer>
      <BoxContainer ref={(el) => (blueBox = el)}></BoxContainer>
      <GreenContainer ref={(el) => (greenBox = el)}></GreenContainer>
      <RedContainer ref={(el) => (redBox = el)}></RedContainer>

      <ButtonContainer>
        <Button onClick={() => timeline.play()}>play</Button>
        <Button onClick={() => timeline.pause()}>pause</Button>
        <Button onClick={() => timeline.resume()}>resume</Button>
        <Button onClick={() => timeline.reverse()}>reverse</Button>
        <Button onClick={() => timeline.restart()}>restart</Button>
      </ButtonContainer>
    </CenterContainer>
  );
};

export default GsapTimeline;
