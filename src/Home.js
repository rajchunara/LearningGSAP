import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { CloseButton, StyledNavBar } from "./Navigation-Components/Navbar";

import NavbarItems from "./Navigation-Components/NavbarItems";
import RouteComponents from "./Navigation-Components/RouteComponents";

//Styled Components
const HomeContainer = styled.div`
  background-color: #282c34;
  /* width: 100%; */
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 850px) {
    padding-left: 300px;
  }
`;

const LogoTitleH2 = styled.h2`
  color: rgb(223, 183, 109);
  margin: 0px;
  padding: 20px 10px;
  border-bottom: 2px solid #32373f;
  @media screen and (max-width: 850px) {
    padding: 0px 10px 5px 10px;
  }
`;

// Main Functional Component
export default function HomeComponent() {
  const [navbarStatus, setNavbarStatus] = useState(true);

  //Styled Burger Icon
  const BurgerContainer = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    @media screen and (max-width: 850px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }
    :hover {
      cursor: pointer;
    }
  `;

  const BurgerLine = styled.div`
    width: 30px;
    height: 4px;
    /* background-color: #21252b; */
    background-color: whitesmoke;
    border-radius: 2px;
  `;

  //Toggle Nabar function
  const toggleNavbar = () => {
    setNavbarStatus(!navbarStatus);
  };

  return (
    <Router>
      <HomeContainer>
        {/* Burger Icon */}
        <BurgerContainer onClick={toggleNavbar}>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
        </BurgerContainer>

        {/* Responsive Navbar */}
        <StyledNavBar showNavbar={navbarStatus}>
          <CloseButton clickFn={toggleNavbar}>
            <h2>x</h2>
          </CloseButton>
          <div className="logo-container">
            <LogoTitleH2>UI Components</LogoTitleH2>
          </div>

          {/* Routing Links*/}
          <NavbarItems></NavbarItems>
        </StyledNavBar>

        {/* Routed Components */}
        <RouteComponents></RouteComponents>
      </HomeContainer>
    </Router>
  );
}
