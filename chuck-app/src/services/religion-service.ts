import { HttpClient, inject } from "aurelia";
import { IFact } from "../domain/IFact";

@inject()
export class ReligionService {

    constructor(private httpClient: HttpClient) {
    }

    async getRandomReligionFact(): Promise<IFact> {
        var response = await this.httpClient
            .get("https://api.chucknorris.io/jokes/random?category=religion", { cache: "no-store" });
        if (response.ok) {
            const data = (await response.json()) as IFact;
            return data;
        }
        return null;
    }

}