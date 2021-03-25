import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { ICategory } from "../domain/ICategory";

export class PoliticalView {
    private data: IFact;
    private category: ICategory = {
        value: "political"
    };

    constructor(private factService: FactService) {
    }

    async attached() {
        console.log("Political attached")
        this.data = await this.factService.getRandomFactByCategory(this.category);
    }

}