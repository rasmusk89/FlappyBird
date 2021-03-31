import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { AppState } from "../state/app-state";
import { ICategory } from "../domain/ICategory";

export class ScienceView {
    private data: IFact[] = [];
    private category: ICategory = {
        category: "science"
    };

    constructor(private factService: FactService,
        private appState: AppState) {
    }

    async attached() {
        for (let i = 0; i < 5; i++) {
            let fact = await this.factService.getRandomFactByCategory(this.category);
            fact.category = this.category.category;
            this.data.push(fact);

            this.appState.addFactToSeenFacts(fact);
        }
    }

}