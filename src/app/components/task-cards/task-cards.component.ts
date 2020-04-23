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

  // task:any;
  todos: TodoModel[] = []
  

  // public input: any = {
    //   description: '',
    //   status: false
    //   id: 0,
  // };

  // getTask() {
  //   let sendInfo = Object.assign({}, this.input);
  //   this.taskService.create(sendInfo);
  //   this.input.description = "";
  //   console.log(this.sendTask.emit(this.input));
  // }
  
  constructor(private taskService:TaskService, private _link: BroadcastTodoService) { 
  }

  ngOnInit(): void {
    this._link.receiveTodo.subscribe((result) => {
      let task = new TodoModel(result, false);
      this.todos.push(task);
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
