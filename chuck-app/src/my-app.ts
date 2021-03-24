import { EventAggregator, IDisposable } from "aurelia";
// import { AppState } from "./state/app-state";

export class MyApp {
  private subscriptions: IDisposable[] = [];

  constructor(
    private eventAggregator: EventAggregator) {

  }


  detathced() {
    this.subscriptions.forEach(subscription => subscription.dispose())
    this.subscriptions = [];
  }
}
