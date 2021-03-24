import { HttpClient, inject } from "aurelia";
import { ICategory } from "../domain/ICategory";

@inject()
export class CategoryService {

    constructor(private httpClient: HttpClient) {
    }

    async getAllAsync(): Promise<ICategory[]> {
        var response = await this.httpClient
            .get("https://api.chucknorris.io/jokes/categories", { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        return [];
    }

}