import { IRouteViewModel } from "@aurelia/router";

export class MealtypeDetails implements IRouteViewModel{
    private data: string = '';
    load(parameters) {
        this.data = JSON.stringify(parameters);
    }

}