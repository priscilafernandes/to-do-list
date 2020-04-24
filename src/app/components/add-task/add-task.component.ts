import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service'; // TODO: refatorar TaskService
import { BroadcastTodoService } from './../broadcast-todo.service';
import { ApiTaskService } from "../../services/api-task.service";
import { TodoModel } from "../todo-model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todoInput: string
  placeholder: string = "Ex.: estudar, terminar projeto..."

  mockModel = {
    usuario: "pris1@outlook.com.br",
    cartoes: [
      {
        conteudo: "Preparar a aula",
        cor: "rgb(118, 239, 64)"
      }
    ]
  }

  constructor(private taskService: TaskService, private _link: BroadcastTodoService, private _apiTask: ApiTaskService) { }

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
