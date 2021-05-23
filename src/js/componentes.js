import { Todo } from '../classes/index-classes';
import { todolist } from '../index';

// REFERENCIAS HTML*************************************
// *****************************************************
const entradaTarea = document.querySelector('.new-todo');
const list = document.querySelector('.todo-list');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulfiltros = document.querySelector('.filters');
const filtro = document.querySelectorAll('.filtro');
// FUNCION CONSTRUIR LISTA TAREAS HTML******************
// *****************************************************
export const crearTodoHtml = (todo) => {
  const fragment = document.createDocumentFragment();
  // LI-------
  const listItem = document.createElement('LI');
  listItem.classList.toggle('completed', todo.completado);
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
// EVENTOS***********************************************
// ******************************************************
// ENTRADA DE TAREA
entradaTarea.addEventListener('keyup', (e) => {
  let texto = e.target.value;
  if (e.keyCode === 13 && texto.length > 0) {
    const nuevaTarea = new Todo(texto);
    todolist.nuevoTodo(nuevaTarea);
    crearTodoHtml(nuevaTarea);
    entradaTarea.value = '';
  }
});
// COMPLETADO O ELIMINAR
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
// BORRAR TODOS LOS COMPLETADOS
btnBorrarCompletados.addEventListener('click', () => {
  todolist.eliminarCompletadosTodo();
  for (let i = list.children.length - 1; i >= 0; i--) {
    const elemento = list.children[i];
    if (elemento.classList.contains('completed')) {
      list.removeChild(elemento);
    }
  }
});
// MOSTRAR TAREAS POR FILTROS: TODOS,PENDIENTES Y COMPLETADOS
ulfiltros.addEventListener('click', (e) => {
  const textElement = e.target.text;
  if (!textElement) {
    return;
  }
  filtro.forEach((elem) => elem.classList.remove('selected'));
  e.target.classList.add('selected');
  for (let elem of list.children) {
    elem.classList.remove('hidden');
    const completado = elem.classList.contains('completed');
    switch (textElement) {
      case 'Pendientes':
        if (completado) {
          elem.classList.add('hidden');
        }
        break;
      case 'Completados':
        if (!completado) {
          elem.classList.add('hidden');
        }
      default:
        break;
    }
  }
});
