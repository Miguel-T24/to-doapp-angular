import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [TodoList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('to-do-app');
  tareas: string[] = [];
  nuevaTarea = '';

  agregarTarea() {
    const t = this.nuevaTarea.trim();
    if (t) {
      this.tareas.push(t);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }

}
