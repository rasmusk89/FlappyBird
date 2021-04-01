import { IFact } from "../domain/IFact";

export class AppState {
    public seenFacts: readonly IFact[] = [];
    public randomFive: IFact[] = [];

    constructor() {
    }

    addFactToSeenFacts(fact: IFact): void {
        this.seenFacts = [...this.seenFacts, fact].sort((a, b) => (a.category > b.category) ? 1 : -1);
    }

    countSeenFacts(): number {
        return this.seenFacts.length;
    }

    getListOfFactValues(): string[] {
        let facts: string[] = [];
        for (const fact of this.seenFacts) {
            facts.push(fact.value);
        }
        return facts;
    }


    randomIntFromTo(min, max): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
