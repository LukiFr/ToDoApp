import React, { useContext } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../globalTheme";

const StyledTask = styled.div`
  border: 2px solid black;
  margin: 10px 10px;
  padding: 0px 20px;
  position: relative;
  background-color: ${({ theme }) => theme.color_1};

  border-radius: 10px;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.color_5};
  }

  h1 {
    color: ${({ theme }) => theme.color_4};
  }

  p {
    color: ${({ theme }) => theme.color_4};
  }

  .deleteButton {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

const Task = ({ task, deleteTask }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledTask theme={theme}>
      <h1>{task.taskName}</h1>
      <p>{task.taskDescription}</p>
      <p>{task.taskDate}</p>
      <p>{task.id}</p>
      <TiDelete
        className="deleteButton"
        size={40}
        onClick={() => deleteTask(task.id)}
      />
    </StyledTask>
  );
};

export default Task;
