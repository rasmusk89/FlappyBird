import { IMealtype } from "../domain/IMealtype";
import { MealtypeService } from "../services/mealtype-service";

export class MealtypesView {

    private data: IMealtype[] = [];

    constructor(private mealtypeService: MealtypeService) {

    }

    /* Does not work...
    attached() {
        this.data = this.mealtypeService.getAllPromise();
    }
    */

    async attached() {
        console.log("MealtypesView attached")
        this.data = await this.mealtypeService.getAllAsync();
    }
}