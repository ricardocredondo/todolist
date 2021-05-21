// Manejar toda la lista de todos
export class TodoList {
  constructor() {
    this.todos = [];
  }
  nuevoTodo(todo) {
    this.todos.push(todo);
  }
  eliminarTodo(id) {
    this.todos = this.todos.filter((elem) => elem.id !== id);
  }
  completadoTodo(id) {
    for (let elem of this.todos) {
      if (elem.id === id) {
        elem.completado = !elem.completado;
        break;
      }
    }
  }
  eliminarCompletadoTodo() {}
}
