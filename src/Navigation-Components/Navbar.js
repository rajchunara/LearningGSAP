import React from "react";
import styled from "styled-components";

export function Navbar(props) {
  return <span className={props.className}>{props.children}</span>;
}

//Took out styled component out of render lifecycle(functional component)
//To execute css property transition, and transform
export const StyledNavBar = styled(Navbar)`
  height: 100vh;
  width: 25%;
  background-color: #21252b;
  position: absolute;
  top: 0px;
  left: 0px;
  @media screen and (max-width: 850px) {
    min-width: 300px;
    transition: all 0.5s;
    transform: ${(props) =>
      props.showNavbar ? " translateX(-350px)" : "translateX(0px)"};
  }
`;

//Close Button
export function CloseButton(props) {
  const CloseBtn = styled.div`
    display: none;

    @media screen and (max-width: 850px) {
      height: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0px 20px;
      font-family: poppins;
      color: whitesmoke;
      background-color: #21252b;

      :hover {
        cursor: pointer;
      }
    }
  `;

  return <CloseBtn onClick={props.clickFn}>{props.children}</CloseBtn>;
}
