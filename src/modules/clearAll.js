import { createTodo, todo } from './displayData.js';

const clearButton = document.getElementById('clear-completed');
const clearAll = () => {
  clearButton.addEventListener('click', () => {
    todo.clearCompleted();
    createTodo();
  });
};

export default clearAll;