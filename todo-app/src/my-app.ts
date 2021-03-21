import { ITodo } from "./domain/ITodo";
import { EventAggregator, IDisposable } from "aurelia";


export class MyApp {

  private todos: ITodo[] = [];
  private placeholder = 'Please insert smth?';

  private description = '';

  private userName = "FooBar"

  private subscriptions: IDisposable[] = [];

  constructor(private eventAggregator: EventAggregator) {

    this.subscriptions.push(
      this.eventAggregator.subscribe('new-todo', (descr: string) => this.addNewTodo(descr))
    );

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

  detathced() {
    this.subscriptions.forEach(subscription => subscription.dispose())
    this.subscriptions = [];
  }



}
