import { HttpClient } from "aurelia";
import { SrvRecord } from "node:dns";
import { AccountService } from "../../services/account-service";

export class IdentityLogin {
    private service: AccountService =
        new AccountService("https://localhost:5001/api/v1/Account/login", this.httpClient);

    private email: string;
    private password: string;

    constructor(protected httpClient: HttpClient) {
    }

    async loginClicked(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.email, this.password)
        let response = await this.service.login(this.email, this.password);
        console.log(response)
    }
}