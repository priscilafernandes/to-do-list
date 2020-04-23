import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TaskService } from './../task.service'; // TODO: refatorar TaskService
import { BroadcastTodoService } from './../broadcast-todo.service'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  //@Output() sendTask = new EventEmitter<any>();
  
  public input:any = {
    id: 0,
    description: '',
    status: false
  };

  constructor(private taskService: TaskService, private _link: BroadcastTodoService) { }
  
  ngOnInit(): void {
  }

  // getTask() {
  //   let sendInfo = Object.assign({}, this.input);
  //   this.taskService.create(sendInfo);
  //   this.input.description = "";
  //   console.log(this.sendTask.emit(this.input));
  // }

  sendTodoData(todo:string) {
    this._link.passTodoValue(todo);
  }

  // onInput(todo: string) {
  //   this._link.sendNewTodo(todo);
  //   this.task = ''
  // }

}
