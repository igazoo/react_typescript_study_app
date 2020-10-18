import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskItem from "./componets/TaskItem";
import TaskList from "./componets/TaskList";
import { Task } from "./Type";
import TaskInput from "./componets/TaskInput";

//初期データの登録
const initialState: Task[] = [
  {
    id: 1,
    title: "次のtodo",
    done: false,
  },
  {
    id: 2,
    title: "test",
    done: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div className="App">
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
