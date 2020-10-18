import React from "react";
import PropTypes from "prop-types";
import { Task } from "../Type";
import { deleteTask } from "../modules/tasksModule";
import { useDispatch } from "react-redux";

type Props = {
  task: Task;
};

//個別のtaskを処理する
const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li className={task.done ? "done" : ""}>
        <label>
          <input type="checkbox" className="checkbox-input" />
          <span className="checkbox-label">{task.title}</span>
        </label>

        <button
          className="btn is-delete"
          onClick={() => dispatch(deleteTask(task))}
        >
          削除
        </button>
      </li>
    </div>
  );
};

TaskItem.propTypes = {};

export default TaskItem;
