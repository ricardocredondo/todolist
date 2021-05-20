import './styles.css';
import { Todo, TodoList } from './classes/index-classes';
//
const todolist = new TodoList();
const tarea1 = new Todo('Aprender react');
const tarea2 = new Todo('Aprender Javascript');
todolist.nuevoTodo(tarea1);
console.log(todolist);
