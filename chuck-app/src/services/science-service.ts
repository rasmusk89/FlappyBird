import { HttpClient, inject } from "aurelia";
import { IFact } from "../domain/IFact";

@inject()
export class ScienceService {

    constructor(private httpClient: HttpClient) {
    }

    async getRandomScienceFact(): Promise<IFact> {
        var response = await this.httpClient
            .get("https://api.chucknorris.io/jokes/random?category=science", { cache: "no-store" });
        if (response.ok) {
            const data = (await response.json()) as IFact;
            return data;
        }
        return null;
    }

}