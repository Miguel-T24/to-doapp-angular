import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  
  tareas:string[] = [];
  nuevaTarea = ""
  agregarTarea(nuevaTarea:string){
    this.tareas.push(nuevaTarea);
    this.nuevaTarea = ""
  }

  eliminarTarea(index: number){
    console.log(index);
    this.tareas.splice(index,1);
  }

}
