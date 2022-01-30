import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../globalTheme";

const StyledAddTask = styled.div`
  border: 2px solid black;
  width: 250px;
  border-radius: 10px;
  margin: 40px auto;
  display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
  align-items: center;
  background-color: ${({ theme }) => theme.color_1};

  form {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: block;
      margin: 10px;
      font-size: 20px;
      color: ${({ theme }) => theme.color_2};

      input {
        display: block;
        width: 200px;
      }
    }

    button {
      display: block;
      padding: 10px;
      width: 80px;
      margin: 20px 0px 0px 0px;
    }
  }
`;

const AddTask = ({ addTask, isDisplay }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledAddTask isDisplay={isDisplay} theme={theme}>
      <form onSubmit={addTask}>
        <label>
          Title
          <input type="text"></input>
        </label>
        <label>
          Description
          <input type="text"></input>
        </label>
        <label>
          Date
          <input type="date"></input>
        </label>
        <button type="submit">add task</button>
      </form>
    </StyledAddTask>
  );
};

export default AddTask;
