// Manejar toda la lista de todos
export class TodoList {
  constructor() {
    this.todos = [];
  }
  nuevoTodo(todo) {
    this.todos.push(todo);
  }
  eliminarTodo(id) {}
  completadoTodo(id) {}
  eliminarCompletadoTodo() {}
}
