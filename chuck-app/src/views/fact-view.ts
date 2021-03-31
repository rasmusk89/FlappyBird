import { ICategory } from "../domain/ICategory";
import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { CategoryService } from "../services/category-service";
import { AppState } from "../state/app-state";

export class FactView {
    private data: IFact;
    private facts: IFact[] = [];

    constructor(
        private factService: FactService,
        private categoryService: CategoryService,
        private appState: AppState) {
    }

    async attached() {
        for (let i = 0; i < 5; i++) {
            let category: ICategory = {
                category: await this.categoryService.getRandomCategory()
            };
            this.data = await this.factService.getRandomFactByCategory(category);
            this.data.category = category.category;
            this.facts.push(this.data);

            this.appState.addFactToSeenFacts(this.data);
        }

    }
}