import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../globalTheme";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  margin: 30px auto;
  border: 4px solid ${({ theme }) => theme.color_1};
  background: ${({ theme }) => theme.color_4};
  transition: 0.3s;

  :hover {
    background: ${({ theme }) => theme.color_5};
  }

  span {
    font-size: 35px;
    color: ${({ theme }) => theme.color_1};
  }
`;

const Button = ({ handToggleAddTask, toggleAddTask }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton theme={theme} onClick={handToggleAddTask}>
      {toggleAddTask ? <span>-</span> : <span>+</span>}
    </StyledButton>
  );
};

export default Button;
