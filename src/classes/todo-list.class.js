// Manejar toda la lista de todos
export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }
  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }
  eliminarTodo(id) {
    this.todos = this.todos.filter((elem) => elem.id !== id);
    this.guardarLocalStorage();
  }
  completadoTodo(id) {
    for (let elem of this.todos) {
      if (elem.id === id) {
        elem.completado = !elem.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }
  eliminarCompletadosTodo() {
    this.todos = this.todos.filter((elem) => !elem.completados);
    this.guardarLocalStorage();
  }
  guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
  cargarLocalStorage() {
    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];
  }
}
