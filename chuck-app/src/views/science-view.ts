import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { ICategory } from "../domain/ICategory";

export class ScienceView {
    private data: IFact;
    private category: ICategory = {
        value: "science"
    };

    constructor(private factService: FactService) {
    }

    async attached() {
        console.log("Science attached")
        this.data = await this.factService.getRandomFactByCategory(this.category);
    }

}