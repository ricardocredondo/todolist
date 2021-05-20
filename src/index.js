import './styles.css';
import { Todo, TodoList } from './classes/index-classes';
import { crearTodoHtml } from './js/componentes';
//
const todolist = new TodoList();
const tarea1 = new Todo('Aprender react');
todolist.nuevoTodo(tarea1);
crearTodoHtml(tarea1);
