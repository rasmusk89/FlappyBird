import { EventAggregator, IDisposable } from "aurelia";
import { IFact } from "../domain/IFact";
import { AppState } from "../state/app-state";

export class SeenView {

  private subscriptions: IDisposable[] = [];
  //  private randomFive: IFact[] = [];


  constructor(
    private eventAggregator: EventAggregator,
    private appState: AppState) {
  }

  getRandomFive(): IFact[] {
    let randomFacts = [];
    let randomFactsCount: number = 5;
    if (this.appState.seenFacts.length < 5) {
      randomFactsCount = this.appState.seenFacts.length;
    }
    for (let i = 0; i < randomFactsCount; i++) {
      randomFacts.push(this.appState.seenFacts[Math.floor(Math.random() * this.appState.seenFacts.length)])
    }
    return randomFacts;
  }
}