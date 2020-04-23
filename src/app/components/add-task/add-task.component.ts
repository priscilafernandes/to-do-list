import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service'; // TODO: refatorar TaskService
import { BroadcastTodoService } from './../broadcast-todo.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  //@Output() sendTask = new EventEmitter<any>();
  
  constructor(private taskService: TaskService, private _link: BroadcastTodoService) { }
  
  ngOnInit(): void {
  }
  

  sendTodoData(todo:string) {
    this._link.passTodoValue(todo);
  }

}
