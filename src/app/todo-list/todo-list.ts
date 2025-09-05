import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html'
})

export class TodoList {
  @Input() title = 'Mis Tareas';
  @Input() placeholder = 'Ingrese una tarea';
  @Input() addLabel = 'Añadir';

  nueva = '';
  tareas: string[] = [];

  agregar() {
    const t = this.nueva.trim();
    if (t) {
      this.tareas.push(t);
      this.nueva = '';
    }
  }

  eliminar(i: number) {
    this.tareas.splice(i, 1);
  }
}
