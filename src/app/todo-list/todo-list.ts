import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  @Input() tareas:string[] = ["Desayunar", "Practicar Angular", "Practicar Analisis de Datos", "Hacer mi Tesis"];

}
