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
      let task = new TodoModel(result, false);
      this.todos.push(task);
    });
  
  }

  delete(event){
    let index = event.target.id;
    this.todos.splice(index, 1);
    console.log(`event target id delete: ${event.target.id}`);
  }

  check(event){
    let index = event.target.id;
    // console.log(`event target id: ${event.target.id}`);
    // console.log(`event target: ${event.target}`);
    // console.log(`event todos: ${this.todos}`);
    // console.log(`event todos index: ${this.todos[index]}`);
    // console.log(`event todos status: ${this.todos[index].status}`);
    // this.todos[index].status = false;
    // this.todos[index].status = !this.todos[index].status;
    this.status = !this.status;
  }

}
