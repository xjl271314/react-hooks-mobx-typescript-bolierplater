import {
    observable,
    action,
    computed
} from 'mobx';
import { TodoModel } from '../models'

class TodoStore {
    constructor(fixtures: TodoModel[]) {
        this.todos = fixtures;
    }

    @observable public todos: Array<TodoModel>;

    @action
    changeTodoStatus = (index: number): void => {
        this.todos[index].done = !this.todos[index].done
        console.log(this)
    }

    @computed
    get unfinishedTodos() {
        return this.todos.filter(todo => !todo.done).length;
    }

    @computed
    get finishedTodos() {
        return this.todos.filter(todo => todo.done).length;
    }
}

export default TodoStore;