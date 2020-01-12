import { observable } from 'mobx';

export class TodoModel {
  readonly id: number;
  @observable public title: string;
  @observable public done: boolean;

  constructor(title: string, done: boolean = false) {
    this.id = TodoModel.generateId();
    this.title = title;
    this.done = done;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default TodoModel;