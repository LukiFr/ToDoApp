import { React, useState, useEffect } from "react";
import styled from "styled-components";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import Task from "./components/Task/Task";
import AddTask from "./components/AddTask/AddTask";
import { ThemeContext, theme } from "./globalTheme";
import Button from "./components/Button/Button";

const MainWrapper = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  scroll-behavior: smooth;

  @import url("https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap");

  font-family: "Dongle", sans-serif;
  border: 5px solid black;
  border-radius: 40px;

  width: 700px;
  margin: 0px auto;
`;

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [tasks, setTasks] = useState();

  const handToggleAddTask = () => {
    setToggleAddTask(!toggleAddTask);
  };

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  const addTask = (e) => {
    const tasks = localStorage.getItem("tasks");

    const task = {
      id: `${tasks === null ? 0 : JSON.parse(tasks).length}`,
      taskName: e.target[0].value,
      taskDescription: e.target[1].value,
      taskDate: e.target[2].value,
    };

    if (tasks === null) {
      localStorage.setItem("tasks", JSON.stringify([task]));
    } else {
      localStorage.setItem(
        "tasks",
        JSON.stringify([...JSON.parse(localStorage.getItem("tasks")), task])
      );
    }

    setTasks(JSON.parse(localStorage.getItem("tasks")));

    e.preventDefault();
  };

  const deleteTask = (id) => {
    const result = [...JSON.parse(localStorage.getItem("tasks"))].filter(
      (x) => id != x.id
    );

    localStorage.setItem("tasks", JSON.stringify(result));
    setTasks(result);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <MainWrapper>
        {tasks ? (
          <TasksContainer tasks={tasks} deleteTask={deleteTask} />
        ) : (
          "No tasks to display..."
        )}
        {toggleAddTask ? (
          <AddTask
            toggleAddTask={setToggleAddTask}
            addTask={addTask}
            isDisplay={toggleAddTask}
          />
        ) : null}
        <Button
          handToggleAddTask={handToggleAddTask}
          toggleAddTask={toggleAddTask}
        />
      </MainWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
