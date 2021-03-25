import { ICategory } from "../domain/ICategory";
import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { CategoryService } from "../services/category-service";
import { AppState } from "../state/app-state";

export class FactView {
    private data: IFact;
    private category: ICategory;

    constructor(
        private factService: FactService,
        private categoryService: CategoryService,
        private appState: AppState) {
    }

    async attached() {
        this.category = {
            value: await this.categoryService.getRandomCategory()
        }

        console.log("Fact attached")
        this.data = await this.factService.getRandomFactByCategory(this.category);
        this.data.category = this.category.value;
        this.appState.addFactToSeenFacts(this.data);
    }

}