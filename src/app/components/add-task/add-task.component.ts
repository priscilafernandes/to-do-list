import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service'; // TODO: refatorar TaskService
import { BroadcastTodoService } from './../broadcast-todo.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todoInput: string
  placeholder: string = "Estudar, terminar projeto..."

  constructor(private taskService: TaskService, private _link: BroadcastTodoService) { }

  ngOnInit(): void {
  }

  changeTodo(event) {
    this.todoInput = event.target.value;
  }

  sendTodoData(todo:string) {
    if (todo != '') {
      this._link.passTodoValue(todo);
    } else {
      this.placeholder = "O campo não pode estar vazio!"
    }
  }

  sendTodoDataClick() {
    if (this.todoInput == undefined || this.todoInput.length <= 0) {
      this.placeholder = "O campo não pode estar vazio!"
    } else {
      this._link.passTodoValue(this.todoInput);
    }
  }

}
