import { IFact } from "../domain/IFact";
import { FactService } from "../services/fact-service";

export class FactView {
    private data: IFact;

    constructor(private factService: FactService) {
    }

    async attached() {
        console.log("Fact attached")
        this.data = await this.factService.getRandomFact();
    }

}