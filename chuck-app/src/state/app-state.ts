import { IFact } from "../domain/IFact";

export class AppState {
    public seenFacts: readonly IFact[] = [];

    constructor() {
    }

    addFactToSeenFacts(fact: IFact): void {
        this.seenFacts = [...this.seenFacts, fact];
    }
    
    countSeenFacts(): number {
        return this.seenFacts.length;
    }
}
