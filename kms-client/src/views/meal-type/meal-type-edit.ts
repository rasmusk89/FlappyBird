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
        this.mealTypeName = response.data.mealTypeName;
        this.mealTypePrice = response.data.price;
    }

    async editClicked(parameters, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        let response = await this.service.editMealType(parameters[0], this.mealTypeName, this.mealTypePrice);
        if (response.statusCode == 201){
            await this.router.load('/meal-type-index');
        }
    }

}