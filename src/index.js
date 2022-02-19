import './style.css';
import populate from './modules/populateList.js';
import { getAddedTodos, form } from './modules/newtodo.js';
import clearAll from './modules/clearAll.js';

populate();
form.addEventListener('submit', getAddedTodos);
clearAll();