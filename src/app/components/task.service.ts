import { Injectable } from '@angular/core';
// import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];
  private taskObjectFinal;

  constructor() { }

  // create(task: Task) {
  //   console.log("entrou no create task");
  //   this.taskObject.push(task);
  //   console.log(this.taskObject);
  // } 

  // read() {
  //   return this.taskObject;
  // }

  delete(event){
    let index = this.taskObject.indexOf(event.target.id);
    this.taskObject.splice(index,1);
    /* this.taskObject = this.taskObject.filter((item, i)=>{
      item.id!=index
      console.log(item, "este e o item")
      console.log(item.id, "este e o item.id")
      console.log(index, "este e o index")
      console.log(i, "este e o i")
    })

     */
  }

}
