import { HttpClient, IRouter, IRouteViewModel } from "aurelia";
import { IMealType } from "../../domain/IMealType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class MealTypeDelete implements IRouteViewModel {
    // https://localhost:5001/api/v1/MealTypes/00000-00000-00000-00000

    private service: BaseService<IMealType> =
        new BaseService<IMealType>("https://localhost:5001/api/v1/MealTypes", this.httpClient, this.state.token);

    private data: IMealType;

    constructor(
        @IRouter private router: IRouter,
        protected httpClient: HttpClient,
        private state: AppState) {
    }

    async load(parameters) {
        let response = await this.service.getOne(parameters[0]);
        if (response.data) {
            this.data = response.data;
        }
    }

    async deleteClicked(parameters, event: Event) {
        let response = await this.service.delete(parameters[0]);
        if (response.data) {
            this.data = response.data;
        }
    }
}