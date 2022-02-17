import './style.css';
import { task, displayTodo } from './modules/displayData.js';

// displayTodo(task.getTasks());

const refresh = document.querySelector('.refresh');
let rotate = -360;
refresh.addEventListener('click', () => {
  refresh.style.transform = `rotate(${rotate}deg)`;
  rotate -= 360;
});

const add = document.querySelector('.add');
const input = document.querySelector('.text');

add.addEventListener('click', () => {
  task.add(input.value);
  input.value = '';
  displayTodo();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    task.add(input.value);
    input.value = '';
    task.populateStorage();
    displayTodo();
  }
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  task.clear();
  displayTodo();
});

const populate = () => {
  if (localStorage.getItem('tasks')) {
    task.setTasks();
    displayTodo();
  } else {
    displayTodo();
  }
};

populate();