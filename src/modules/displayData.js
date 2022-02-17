import Tasks from './data.js';
import updateStatus from './tasksUpdate.js';

const task = new Tasks();
const listSection = document.querySelector('.list-section');

const displayTodo = () => {
  listSection.innerHTML = '';
  for (let i = 0; i < task.list.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo');
    listItem.innerHTML = `
     <div class="checkbox" id="checkbox${i}"></div>
     <i class="checkmark fa fa-check-circle " id="checkmark${i}">     
      <input type="text" class="task-description" id="description${i}">
      <i class="remove fa fa-trash-o" id="remove${i}">  
    `;
    listSection.appendChild(listItem);
    const checkbox = document.getElementById(`checkbox${i}`);
    const checkmark = document.getElementById(`checkmark${i}`);
    const text = document.getElementById(`description${i}`);
    const elementArray = [checkmark, checkbox, text];

    updateStatus(elementArray, task.list[i], i);
    const remove = document.getElementById(`remove${i}`);
    const input = document.getElementById(`description${i}`);
    input.value = task.list[i].description;

    remove.addEventListener('click', () => {
      task.remove(i);
      task.populateStorage();
      displayTodo();
    });

    input.addEventListener('change', () => {
      const tasks = {
        description: input.value,
        completed: task.list[i].completed,
        index: task.list[i].index,
      };
      task.edit(i, tasks);
    });
  }
};

export { task, displayTodo };
