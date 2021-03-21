import { ITodo } from "./domain/ITodo";

export class MyApp {

  private todos: ITodo[] = [];
  private placeholder = 'Please insert smth?';

  private description = '';

  private userName = "FooBar"

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

  addNewTodo = (descr: string): void => {
    this.todos.push({
      description: descr.trim(),
      done: false
    });
  }

  removeTodo = (index: number): void => {
    this.todos.splice(index, 1)
  }



}
