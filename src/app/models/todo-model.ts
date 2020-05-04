export class TodoModel {
  constructor(
    public description:string,
    public status: boolean,
    public isEditable: boolean,
    public id?: number
  ){

  }
}
