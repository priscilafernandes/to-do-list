export class TodoModel {
  constructor(
    public description:string,
    public status: boolean,
    public id?: number
  ){

  }
}
