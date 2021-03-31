import { HttpClient, inject } from "aurelia";
import { ICategory } from "../domain/ICategory";

@inject()
export class CategoryService {

    constructor(private httpClient: HttpClient) {
    }

    async getRandomCategory(): Promise<string> {

        var response = await this.httpClient
            .get("https://api.chucknorris.io/jokes/categories", { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            const randomCategory = data[Math.floor(Math.random() * data.length)];
            return randomCategory;
        }
        throw new Error("Can't get category!");
    }

    async getAllCategories(): Promise<ICategory[]> {

        var response = await this.httpClient
            .get("https://api.chucknorris.io/jokes/categories", { cache: "no-store" });
        if (response.ok) {
            const data = (await response.json()) as ICategory[];
            return data;
        }
        throw new Error("Can't get category!");
    }

}