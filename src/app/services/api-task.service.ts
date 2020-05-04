import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TodoModel } from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {
  private urlPost: string = 'https://ceep.herokuapp.com/cartoes/salvar';
  private urlGet: string = 'https://ceep.herokuapp.com/cartoes/carregar';

  constructor(private http: HttpClient) { }

  postTask(model) {
    return this.http.post(this.urlPost, model)
  }

  getTask() {
    return this.http.get(this.urlGet)
  }

}
