import { ICategory } from "../domain/ICategory";
import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { CategoryService } from "../services/category-service";

export class FactView {
    private data: IFact;
    private category: ICategory;

    constructor(private factService: FactService, private categoryService: CategoryService) {
    }

    async attached() {
        this.category = {
            value: await this.categoryService.getRandomCategory()
        }
        
        console.log("Fact attached")
        this.data = await this.factService.getRandomFactByCategory(this.category);
    }

}