import React from "react";
import PropTypes from "prop-types";
import { Task } from "../Type";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        "登録されたtodoはありません"
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem task={task} />
          ))}{" "}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
