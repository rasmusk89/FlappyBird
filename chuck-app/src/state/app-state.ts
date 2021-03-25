import { IFact } from "../domain/IFact";

export class AppState {
    public seenFacts: readonly IFact[] = [];

    constructor() {
        this.seenFacts = [
            {
                id: "1",
                category: "first",
                value: "category"
            }
        ]
    }

    addFactToSeenFacts(fact: IFact): void {
        this.seenFacts = [...this.seenFacts, fact];
    }
    
    countSeenFacts(): number {
        return this.seenFacts.length;
    }
}
