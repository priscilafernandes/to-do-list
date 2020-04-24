import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { BroadcastTodoService } from './../broadcast-todo.service'
import { TodoModel } from './../todo-model'

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  todos: TodoModel[] = []
  status:boolean = false;
  

  constructor(private taskService:TaskService, private _link: BroadcastTodoService) { 
  }

  ngOnInit(): void {
    this._link.receiveTodo.subscribe((result) => {
      let task = new TodoModel(result, false, false);
      this.todos.push(task);
    });
  
  }

  edit(todo){
    todo.isEditable = !todo.isEditable;
  }

  delete(event){
    let index = event.target.id;
    this.todos.splice(index, 1);
    console.log(`event target id delete: ${event.target.id}`);
  }

  check(todo){
    todo.status = !todo.status;
  }

}
