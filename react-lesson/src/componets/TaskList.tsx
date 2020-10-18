import React from "react";
import PropTypes from "prop-types";
import { Task } from "../Type";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  const handleDelete = (task: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        "登録されたtodoはありません"
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
