import { HttpClient, inject } from "aurelia";
import { IMealtype } from "../domain/IMealtype";

@inject()
export class MealtypeService {

    constructor(private httpClient: HttpClient) {

    }

    async getAllAsync(): Promise<IMealtype[]> {
        var response = await this.httpClient
            .get("https://localhost:5001/api/mealtypes", { cache: "no-store" });
        if (response.ok) {
            const data = (await response.json()) as IMealtype[];
            return data;
        }
        return [];
    }

    /*
    getAllPromise(): Promise<IMealtype[]> {
        return this.httpClient
            .get("https://localhost:5001/api/mealtypes", { cache: "no-store" })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => []);
    }

    */
}