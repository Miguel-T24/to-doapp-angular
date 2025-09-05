import { Component, Input , Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  @Input() tareas:string[] = [];
  @Output() eliminar = new EventEmitter<number>();

  onEliminar(i:number){
    this.eliminar.emit(i);
  }

}
