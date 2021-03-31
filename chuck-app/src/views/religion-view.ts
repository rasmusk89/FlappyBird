import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { ICategory } from "../domain/ICategory";


export class ReligionView {
    private data: IFact[] = [];
    private category: ICategory = {
        category: "religion"
    };

    constructor(private factService: FactService) {
    }

    async attached() {
        for (let i = 0; i < 5; i++) {
            let fact = await this.factService.getRandomFactByCategory(this.category);
            fact.category = this.category.category;
            this.data.push(fact);
        }
    }

}