import { IFact } from "../domain/IFact";
import { PoliticalService } from "../services/political-service";

export class FactView {
    private data: IFact;

    constructor(private politicalService: PoliticalService) {
    }

    async attached() {
        console.log("Political attached")
        this.data = await this.politicalService.getRandomPoliticalFact();
    }

}