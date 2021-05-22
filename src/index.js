import './styles.css';
import { TodoList } from './classes/index-classes';
import { crearTodoHtml } from './js/componentes';
//
export const todolist = new TodoList();
todolist.todos.forEach((todo) => crearTodoHtml(todo));
