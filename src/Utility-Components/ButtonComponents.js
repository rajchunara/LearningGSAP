import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
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
