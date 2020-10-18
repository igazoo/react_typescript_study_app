import React from "react";
import PropTypes from "prop-types";
import { Task } from "../Type";

type Props = {
  task: Task;
  handleDelete: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, handleDelete }) => {
  return (
    <div>
      <li className={task.done ? "done" : ""}>
        <label>
          <input type="checkbox" className="checkbox-input" />
          <span className="checkbox-label">{task.title}</span>
        </label>

        <button className="btn is-delete" onClick={() => handleDelete(task)}>
          　削除
        </button>
      </li>
    </div>
  );
};

TaskItem.propTypes = {};

export default TaskItem;
