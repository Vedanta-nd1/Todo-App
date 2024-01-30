import { createSlice } from '@reduxjs/toolkit';

let taskIdCounter = 0;

const initialState = {
  groups: [
    { id: 1, name: 'Group 1', tasks: [] },
    { id: 2, name: 'Group 2', tasks: [] },
    { id: 3, name: 'Group 3', tasks: [] },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { groupId, task } = action.payload;
      const group = state.groups.find(group => group.id === groupId); 
      task.id = ++taskIdCounter;
      group.tasks.push(task);
    },
    deleteTask: (state, action) => {
      const { groupId, taskId } = action.payload;
      const group = state.groups.find(group => group.id === groupId);
      group.tasks = group.tasks.filter(task => task.id !== taskId);
    },
  },
});

export const { addTask, deleteTask } = todosSlice.actions;

export default todosSlice.reducer;