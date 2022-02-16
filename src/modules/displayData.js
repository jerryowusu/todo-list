import todoData from './data.js';

export const listTodo = document.querySelector('.list-section');
const todoContainer = document.createElement('ul');
todoContainer.className = 'todo-container';
listTodo.appendChild(todoContainer);

const displayTodo = () => {
  if (todoData.length !== 0) {
    listTodo.style.display = 'block';
    todoData.map((data) => {
      const list = document.createElement('li');
      list.className = 'todo';
      list.innerHTML = `
       <div>
         <input type="checkbox" id="checkbox">
       </div>
       <p>${data.description}</p></div>
       <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      `;
      todoContainer.append(list);
      return list;
    });
  }
};

export default displayTodo;