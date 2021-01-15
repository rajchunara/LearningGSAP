import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
`;

const YellowCircle = styled(Circle)`
  background-color: #f2ea4d;
`;

const PurpleCircle = styled(Circle)`
  background-color: #8045e0;
`;

const OrangeCircle = styled(Circle)`
  background-color: #f2b34d;
`;

const GreenCircle = styled(Circle)`
  background-color: #29ce7e;
`;

const StaggeredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  color: #17384b;
  border: none;
  padding: 4px 6px;
  border-radius: 3px;
  background-color: whitesmoke;
  font-weight: 700;
  font-family: poppins;
  outline: none;
  margin-left: 10px;

  :hover {
    cursor: pointer;
  }
`;

const StaggeredAnimation = () => {
  let yellowCircle = useRef(null);
  let purpleCircle = useRef(null);
  let orangeCircle = useRef(null);
  let greenCircle = useRef(null);

  //Animation using css
  //This runs after the component is loaded
  useEffect(() => {
    gsap.from(".circle", {
      x: "random(-200,200)",
      opacity: 0,
      stagger: 0.25
    });
  }, []);

  //Animation using useRef() hook
  const onStartAnimation = () => {
    gsap.from([yellowCircle, purpleCircle, orangeCircle, greenCircle], {
      x: "random(-200,200)",
      opacity: 0,
      stagger: 0.25
    });
  };

  return (
    <StaggeredContainer>
      <YellowCircle
        className="circle"
        ref={(el) => (yellowCircle = el)}
      ></YellowCircle>
      <PurpleCircle
        className="circle"
        ref={(el) => (purpleCircle = el)}
      ></PurpleCircle>
      <OrangeCircle
        className="circle"
        ref={(el) => (orangeCircle = el)}
      ></OrangeCircle>
      <GreenCircle
        className="circle"
        ref={(el) => (greenCircle = el)}
      ></GreenCircle>

      <ButtonContainer>
        <Button className="start-btn" onClick={onStartAnimation}>
          Start Animation
        </Button>

        {/* <Button onClick={resetAnimation}>Reset</Button> */}
      </ButtonContainer>
    </StaggeredContainer>
  );
};

export default StaggeredAnimation;
