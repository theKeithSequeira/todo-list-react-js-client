import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { fetchTodos } from "../../api";

// Define the initial state using that type
const initialState = {
  todos: [],
};

export const fetchAllTodos = createAsyncThunk(
  "todos/fetchAllTodos",
  async () => {
    const response = await fetchTodos();
    return response;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: v4(),
          title: action.payload.title,
          desc: action.payload.desc,
          isComplete: action.payload.isComplete,
        },
      ];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { updateTodo, deleteTodo } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;
