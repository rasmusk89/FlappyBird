import { HttpClient } from "aurelia";
import { IMealType } from "../../domain/IMealType";
import { BaseService } from "../../services/base-service";

export class MealTypeIndex {

    private service: BaseService<IMealType> = new BaseService<IMealType>("https://localhost:5001/api/v1/MealTypes", this.httpClient);

    private data: IMealType[] = [];

    constructor(protected httpClient: HttpClient) {
    }

    async attached() {
        let response = await this.service.getAll();
        if(response.data) {
            this.data = response.data;
        }
    }
}