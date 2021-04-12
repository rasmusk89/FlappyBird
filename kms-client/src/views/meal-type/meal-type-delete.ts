import { HttpClient, IRouter, IRouteViewModel } from "aurelia";
import { IMealType } from "../../domain/IMealType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class MealTypeDelete implements IRouteViewModel {
    // https://localhost:5001/api/v1/MealTypes/00000-00000-00000-00000

    private service: BaseService<IMealType> =
        new BaseService<IMealType>("https://localhost:5001/api/v1/MealTypes", this.httpClient, this.state.token);

    private data: IMealType;
    private id: string;

    constructor(
        @IRouter private router: IRouter,
        protected httpClient: HttpClient,
        private state: AppState) {
    }

    async load(parameters) {
        this.id = parameters[0];
        let response = await this.service.getOne(parameters[0]);
        if (response.data) {
            this.data = response.data;
        }
    }

    async deleteClicked(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        let response = await this.service.delete(this.id);
        if (response.statusCode == 204) {
            await this.router.load('/meal-type-index');
        }
    }
}