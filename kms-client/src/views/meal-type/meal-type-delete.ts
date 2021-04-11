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

    async attached() {
    }

    async deleteClicked(parameters, event: Event) {
        let response = await this.service.delete(parameters[0]);
        if (response.data) {
            this.data = response.data;
            await this.router.load('/meal-type-index');
        }

        // let response = await this.service.login(this.email, this.password);

        // if (response.statusCode == 200 && response.data) {
        //     this.state.token = (response.data as IJwt).token;
        //     this.state.firstname = (response.data as IJwt).firstname;
        //     this.state.lastname = (response.data as IJwt).lastname;

        //     await this.router.load('/home-index');
        // }

    }
}