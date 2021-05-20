// REFERENCIAS HTML
const list = document.querySelector('.todo-list');
// FUNCION CONSTRUIR LISTA TAREAS HTML
export const crearTodoHtml = (todo) => {
  const fragment = document.createDocumentFragment();
  // LI-------
  const listItem = document.createElement('LI');
  listItem.classList.add('completed');
  listItem.setAttribute('data-id', 'abc');
  // **DIV------
  const listDiv = document.createElement('DIV');
  listDiv.classList.add('view');
  // ****INPUT-------
  const listInput = document.createElement('INPUT');
  listInput.classList.add('toggle');
  listInput.setAttribute('type', 'checkbox');
  listInput.setAttribute('checked', true);
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
