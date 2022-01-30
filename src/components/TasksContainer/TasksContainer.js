import React, { useContext } from "react";
import Task from "../Task/Task";
import styled from "styled-components";
import { ThemeContext } from "../../globalTheme";

const StyledTaskContainer = styled.div`
  background-color: ${({ theme }) => theme.color_2};
  border-radius: 40px;

  .containerHeader {
    margin: 0px;
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.color_1};
  }
`;

const TasksContainer = ({ tasks, deleteTask }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledTaskContainer theme={theme}>
      <h1 className="containerHeader">Thinks To Do</h1>
      {tasks
        .map((task, index) => {
          return <Task key={index} task={task} deleteTask={deleteTask} />;
        })
        .sort(
          (a, b) =>
            new Date(a.props.task.taskDate) - new Date(b.props.task.taskDate)
        )}
    </StyledTaskContainer>
  );
};

export default TasksContainer;
