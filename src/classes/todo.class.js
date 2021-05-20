// Esta clase se va a utilizar fuera de este archivo
export class Todo {
  constructor(tarea) {
    this.tarea = tarea;

    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }
}
