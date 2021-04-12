import { HttpClient, IRouter, IRouteViewModel } from "aurelia";
import { STATUS_CODES } from "node:http";
import { IMealType } from "../../domain/IMealType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class MealTypeCreate implements IRouteViewModel {

    private service: BaseService<IMealType> =
        new BaseService<IMealType>("https://localhost:5001/api/v1/MealTypes", this.httpClient, this.state.token);

    private data: IMealType;
    private mealTypeName: string;
    private mealTypePrice: number;


    constructor(
        @IRouter private router: IRouter,
        protected httpClient: HttpClient,
        private state: AppState) {
    }

    async attached() {
    }

    async createClicked(event: Event) {
        event.preventDefault();
        let response = await this.service.createNewMealType(this.mealTypeName, this.mealTypePrice);

        if (response.statusCode == 201){
            await this.router.load('/meal-type-index');
        }
    }
}