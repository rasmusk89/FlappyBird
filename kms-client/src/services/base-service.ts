import { HttpClient, IRouter } from "aurelia";
import { IMealType } from "../domain/IMealType";
import { IFetchResponse } from "../types/IFetchResponse";
import { IJwt } from "../types/IJwt";
import { IMessage } from "../types/IMessage";
import { IQueryParams } from "../types/IQueryParams";

export class BaseService<TEntity> {

    constructor(
        protected apiEndpointUrl: string,
        protected httpClient: HttpClient,
        private jwt?: string
    ) {
    }

    private authHeaders = this.jwt !== undefined ? {
        'Authorization': 'Bearer ' + (this.jwt)
    } : {};

    async getAll(queryParams?: IQueryParams): Promise<IFetchResponse<TEntity[]>> {
        let url = this.apiEndpointUrl;

        if (queryParams !== undefined) {
            //TODO: add query params to url
        }

        try {

            const response = await this.httpClient.fetch(
                url,
                {
                    cache: "no-store",
                    headers: this.authHeaders
                });
            if (response.ok) {
                const data = (await response.json()) as TEntity[];
                return {
                    statusCode: response.status,
                    data: data,
                }
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            }
        } catch (reason) {
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            }
        }
    }

    async getOne(id: string, queryParams?: IQueryParams,): Promise<IFetchResponse<TEntity>> {
        let url = this.apiEndpointUrl;
        url = url + '/' + id;

        if (queryParams !== undefined) {
            //TODO: add query params to url
        }

        try {
            const response = await this.httpClient.fetch(url, { cache: "no-store", headers: this.authHeaders });
            if (response.ok) {
                const data = (await response.json()) as TEntity;
                return {
                    statusCode: response.status,
                    data: data,
                }
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            }
        } catch (reason) {
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            }
        }
    }

    async delete(id: string, queryParams?: IQueryParams): Promise<IFetchResponse<TEntity>> {
        let url = this.apiEndpointUrl;
        url = url + '/' + id;

        if (queryParams !== undefined) {
            //TODO: add query params to url
        }

        try {
            const response = await this.httpClient.delete(url);

            if (response.status == 204) {
                return {
                    statusCode: response.status,
                }
            }

            return {
                statusCode: response.status,
                errorMessage: response.statusText
            }
        } catch (reason) {

            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            }
        }
    }

    async createNewMealType(name: string, price: number, queryParams?: IQueryParams): Promise<IFetchResponse<TEntity>> {
        let url = this.apiEndpointUrl;

        if (queryParams !== undefined) {
            //TODO: add query params to url
        }
        try {
            let body: IMealType = { mealTypeName: name, price: price };
            let bodyStr = JSON.stringify(body);

            const response = await this.httpClient.post(url, bodyStr, { cache: "no-store" });

            if (response.ok) {
                const data = (await response.json()) as TEntity;
                return {
                    statusCode: response.status,
                    data: data
                }
            }

            const data = (await response.json()) as IMessage;

            return {
                statusCode: response.status,
                errorMessage: response.statusText + ' ' + data.messages.join(' '),
            };
        } catch (reason) {
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            }
        }
    }


    async editMealType(id: string, name: string, price: number, queryParams?: IQueryParams): Promise<IFetchResponse<TEntity>> {
        let url = this.apiEndpointUrl;
        url = url + '/' + id;

        if (queryParams !== undefined) {
            //TODO: add query params to url
        }
        try {
            let body = {
                id: id,
                mealTypeName: name,
                price: price
            };
            let bodyStr = JSON.stringify(body);

            const response = await this.httpClient.put(url, bodyStr);

            if (response.ok) {
                return {
                    statusCode: response.status,
                }
            }

            const data = (await response.json()) as IMessage;

            return {
                statusCode: response.status,
                errorMessage: response.statusText + ' ' + data.messages.join(' '),
            };
        } catch (reason) {
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            }
        }
    }
}