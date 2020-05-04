import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastTodoService {
  receiveTodo = new EventEmitter<string>();

  constructor() { }

  passTodoValue(todo_content:string){
    this.receiveTodo.emit(todo_content);
  }
}
