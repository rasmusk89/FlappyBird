import { IFact } from "../domain/IFact";
import { ReligionService } from "../services/religion-service";

export class ReligionView {
    private data: IFact;

    constructor(private religionService: ReligionService) {
    }

    async attached() {
        console.log("Religion attached")
        this.data = await this.religionService.getRandomReligionFact();
    }

}