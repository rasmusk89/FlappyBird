import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { ICategory } from "../domain/ICategory";
import { AppState } from "../state/app-state";

export class PoliticalView {
    private data: IFact[] = [];
    private category: ICategory = {
        category: "political"
    };

    constructor(private factService: FactService,
        private appState: AppState) {
    }

    async attached() {
        for (let i = 0; i < 5; i++) {
            let fact = await this.factService.getRandomFactByCategory(this.category);
            fact.category = this.category.category;
            this.data.push(fact);
        
            if(!this.appState.seenFacts.includes(fact)) {
                this.appState.addFactToSeenFacts(fact);
            }
        }
    }

}