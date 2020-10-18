import React, { useState } from "react";
import "./App.css";
import TaskList from "./componets/TaskList";
import TaskInput from "./componets/TaskInput";

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
