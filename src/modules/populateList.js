import { createTodo, todo } from './displayData.js';

const populate = () => {
  if (localStorage.getItem('todos')) {
    todo.getStoredTodos();
    createTodo();
  } else {
    createTodo();
  }
};

export default populate;