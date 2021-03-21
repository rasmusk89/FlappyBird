import { ITodo } from "../domain/ITodo";
import { EventAggregator, IDisposable } from "aurelia";
import { AppState } from "../state/app-state";


export class TodoView {

  private placeholder = 'Please insert smth?';

  private description = '';

  private userName = "FooBar"

  private subscriptions: IDisposable[] = [];

  constructor(
    private eventAggregator: EventAggregator,
    private appState: AppState) {

    this.subscriptions.push(
      this.eventAggregator.subscribe('new-todo', (descr: string) => this.addNewTodo(descr))
    );
  }

  addNewTodo = (descr: string): void => {
    this.appState.addTodo({ description: descr.trim(), done: false });
  }

  removeTodo = (index: number): void => {
    this.appState.removeTodo(index);
  }

  detathced() {
    this.subscriptions.forEach(subscription => subscription.dispose())
    this.subscriptions = [];
  }



}
