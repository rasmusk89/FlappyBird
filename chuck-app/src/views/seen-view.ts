import { EventAggregator, IDisposable } from "aurelia";
import { AppState } from "../state/app-state";

export class SeenView {

  private subscriptions: IDisposable[] = [];
    
    constructor(
        private eventAggregator: EventAggregator,
        private appState: AppState) {
    
            /*
        this.subscriptions.push(
          this.eventAggregator.subscribe('new-todo', (descr: string) => this.addNewTodo(descr))
        );
        */
      }
    
      /*
      addNewTodo = (descr: string): void => {
        this.appState.addFactToSeenFacts({ description: descr.trim(), done: false });
      }

      detathced() {
        this.subscriptions.forEach(subscription => subscription.dispose())
        this.subscriptions = [];
      }
      */
}