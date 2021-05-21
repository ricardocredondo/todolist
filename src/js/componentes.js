import { Todo } from '../classes/todo.class';
import { todolist } from '../index';

// REFERENCIAS HTML
const entradaTarea = document.querySelector('.new-todo');
const list = document.querySelector('.todo-list');
// FUNCION CONSTRUIR LISTA TAREAS HTML
export const crearTodoHtml = (todo) => {
  const fragment = document.createDocumentFragment();
  // LI-------
  const listItem = document.createElement('LI');
  // listItem.classList.toggle('completed', todo.completado);
  listItem.setAttribute('data-id', todo.id);
  // **DIV------
  const listDiv = document.createElement('DIV');
  listDiv.classList.add('view');
  // ****INPUT-------
  const listInput = document.createElement('INPUT');
  listInput.classList.add('toggle');
  listInput.setAttribute('type', 'checkbox');
  todo.completado ? (listInput.checked = true) : (listInput.checked = false);
  // ****LABEL--------
  const listLabel = document.createElement('LABEL');
  listLabel.textContent = `${todo.tarea}`;
  // ****BUTTON-------
  const listButton = document.createElement('BUTTON');
  listButton.classList.add('destroy');
  // **INPUT----------
  const listInput2 = document.createElement('INPUT');
  listInput2.classList.add('edit');
  listInput2.setAttribute('value', 'Create a TodoMVC template');
  // AGREGAR A HTML
  listDiv.append(listInput);
  listDiv.append(listLabel);
  listDiv.append(listButton);
  listItem.append(listDiv);
  listItem.append(listInput2);
  fragment.append(listItem);
  list.append(fragment);
};
// EVENTOS
entradaTarea.addEventListener('keyup', (e) => {
  let texto = e.target.value;
  if (e.keyCode === 13 && texto.length > 0) {
    const nuevaTarea = new Todo(texto);
    todolist.nuevoTodo(nuevaTarea);
    crearTodoHtml(nuevaTarea);
    entradaTarea.value = '';
  }
});
list.addEventListener('click', (e) => {
  const nombreElemento = e.target.localName;
  const elementoPadre = e.target.parentElement.parentElement;
  const todoId = parseInt(elementoPadre.getAttribute('data-id'));
  if (nombreElemento.includes('input')) {
    todolist.completadoTodo(todoId);
    elementoPadre.classList.toggle('completed');
  } else if (nombreElemento.includes('button')) {
    todolist.eliminarTodo(todoId);
    list.removeChild(elementoPadre);
  }
});
