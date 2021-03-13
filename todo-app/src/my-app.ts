import { ITodo } from "./domain/ITodo";

export class MyApp {

  private todos: ITodo[] = [];
  private placeholder = 'Please insert smth?';

  private description = 'asdasd';

  constructor() {
    this.todos.push(
      {
        description: 'Do smth!',
        done: false,
      },
      {
        description: 'Smth else!',
        done: false,
      }
    )
  }

  addNewTodo() {
    this.todos.push({
      description: this.description,
      done: false
    });
  }
}
