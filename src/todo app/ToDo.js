import React, { useState } from "react";
import "./ToDo.css";
import addTask from "./AddTask";
import ListTask from "./ListTask";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    { title: "learn html" },
    { title: "learn css" },
    { title: "learn js" },
    { title: "learn js" },
  ]);

  const addTask=(title)=>{
    const newTask=[...tasks,{title}]};
    setTasks(newTask);

  };
  return (
    <>
      <div className="todo-container">
        <div className="header">ToDoApp</div>
        <div className="addtask">
          <AddTask addTask={addTask}/>
        </div>
        <div className="listtask">
          {tasks.map((task) => (
            <ListTask task={task} />
          ))}
        </div>
      </div>
    </>
  );
;

export default ToDo;
