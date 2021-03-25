import { HttpClient, inject } from "aurelia";
import { IFact } from "../domain/IFact";
import { ICategory } from "../domain/ICategory";


@inject()
export class FactService {

    constructor(private httpClient: HttpClient) {
    }

    async getRandomFactByCategory(category: ICategory): Promise<IFact> {
        var response = await this.httpClient
            .get(`https://api.chucknorris.io/jokes/random?category=${category.value}`, { cache: "no-store" });
        if (response.ok) {
            const data = (await response.json()) as IFact;
            return data;
        }
        return null;
    }

}