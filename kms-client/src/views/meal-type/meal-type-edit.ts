import { HttpClient, IRouter } from "aurelia";
import { data } from "jquery";
import { IMealType } from "../../domain/IMealType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class MealTypeEdit {


    private service: BaseService<IMealType> =
        new BaseService<IMealType>("https://localhost:5001/api/v1/MealTypes", this.httpClient, this.state.token);

    private data: IMealType;
    private mealTypeName: string;
    private mealTypePrice: number;
    private id: string;


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
        this.id = parameters[0];
        this.mealTypeName = response.data.mealTypeName;
        this.mealTypePrice = response.data.price;
    }

    async editClicked(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        let response = await this.service.editMealType(this.id, this.mealTypeName, this.mealTypePrice);
        if (response.statusCode == 204) {
            await this.router.load('/meal-type-index');
        }
    }

}