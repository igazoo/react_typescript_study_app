import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../Type";

type State = {
  count: number;
  tasks: Task[];
};

const initialState: State = {
  count: 1,
  tasks: [
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
  ],
};

const tasksModule = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //stateを更新するためのもの
    addTask(state: State, action: PayloadAction<string>) {
      state.count++;

      const newTask: Task = {
        id: state.count,
        title: action.payload,
        done: false,
      };

      state.tasks = [newTask, ...state.tasks];
    },
    deleteTask(state: State, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = tasksModule.actions;

export default tasksModule;
