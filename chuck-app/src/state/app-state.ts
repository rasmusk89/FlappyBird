import { IFact } from "../domain/IFact";

export class AppState {
    public seenFacts: readonly IFact[] = [];

    constructor() {
    }

    addFactToSeenFacts(fact: IFact): void {
        this.seenFacts = [...this.seenFacts, fact].sort((a, b) => (a.category > b.category) ? 1 : -1);
    }
    
    countSeenFacts(): number {
        return this.seenFacts.length;
    }
}
