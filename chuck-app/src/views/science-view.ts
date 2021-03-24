import { IFact } from "../domain/IFact";
import { ScienceService } from "../services/science-service";

export class FactView {
    private data: IFact;

    constructor(private scienceService: ScienceService) {
    }

    async attached() {
        console.log("Science attached")
        this.data = await this.scienceService.getRandomScienceFact();
    }

}