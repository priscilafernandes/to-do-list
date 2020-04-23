import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { BroadcastTodoService } from './../broadcast-todo.service'

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  tasks:any;
  todos: string[] = []
  
  constructor(private taskService:TaskService, private _link: BroadcastTodoService) { }

  ngOnInit(): void {
    this._link.receiveTodo.subscribe((result) => {
      this.todos.push(result);
    });
    // this.readTask();
  
  }
  
  readTask(){
    // this.tasks = this.taskService.read();
    // console.log(this.tasks);
  }

  delete(event){
    // this.taskService.delete(event);
    // console.log(this.tasks);
  }
  
  // public sendTask(input:any) : void {
  //   this.tasks.push(input.tasks)
  // }

}
