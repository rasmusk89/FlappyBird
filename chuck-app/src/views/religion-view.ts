import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";
import { ICategory } from "../domain/ICategory";


export class ReligionView {
    private data: IFact;
    private category: ICategory = {
        value: "religion"
    };

    constructor(private factService: FactService) {
    }

    async attached() {
        console.log("Religion attached")
        this.data = await this.factService.getRandomFactByCategory(this.category);
    }

}