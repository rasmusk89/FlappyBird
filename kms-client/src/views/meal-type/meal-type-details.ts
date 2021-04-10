import { HttpClient, IRouteViewModel } from "aurelia";
import { IMealType } from "../../domain/IMealType";
import { BaseService } from "../../services/base-service";

export class MealTypeDetails implements IRouteViewModel{
    // https://localhost:5001/api/v1/MealTypes/00000-00000-00000-00000

    private service: BaseService<IMealType> =
        new BaseService<IMealType>("https://localhost:5001/api/v1/MealTypes", this.httpClient);

    private data: IMealType;

    constructor(protected httpClient: HttpClient) {
    }

    async attached() {
    }

    async load(parameters) {
        console.log("Loaded: ", parameters)

        let response = await this.service.get(parameters[0]);
        if (response.data) {
            this.data = response.data;
        }
    }
}