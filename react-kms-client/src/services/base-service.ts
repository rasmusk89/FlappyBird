import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiBaseUrl } from '../configuration';
import { IFetchResponse } from '../types/IFetchResponse';
import { IMessages } from '../types/IMessages';

export abstract class BaseService {
    protected static axios = Axios.create({
        baseURL: ApiBaseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    protected static getAxiosConfig(jwt?: string): AxiosRequestConfig | undefined {
        if (!jwt) return undefined;

        const config: AxiosRequestConfig = {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        }
        return config;
    }

    static async getAll<TEntity>(apiEndpoint: string, jwt?: string): Promise<IFetchResponse<TEntity[]>> {
        try {
            let response = await this.axios.get<TEntity[]>(apiEndpoint, BaseService.getAxiosConfig(jwt));
            return {
                ok: response.status <= 299,
                statusCode: response.status,
                data: response.data
            };
        }
        catch (err) {
            let error = err as AxiosError;
            return {
                ok: false,
                statusCode: error.response?.status ?? 500,
                messages: (error.response?.data as IMessages).messages
            }
        }
    }

    static async getOne<TEntity>(apiEndpoint: string, id: string, jwt?: string): Promise<IFetchResponse<TEntity>> {
        const endPointUrl = apiEndpoint + '/' + id;
        try {
            let response = await this.axios.get<TEntity>(endPointUrl, BaseService.getAxiosConfig(jwt));
            return {
                ok: response.status <= 299,
                statusCode: response.status,
                data: response.data
            }
        }
        catch (err) {
            let error = err as AxiosError;
            return {
                ok: false,
                statusCode: error.response?.status ?? 500,
                messages: (error.response?.data as IMessages).messages
            }
        }
    }

    static async delete<TEntity>(apiEndpoint: string, id: string, jwt?: string): Promise<IFetchResponse<TEntity>> {
        const endPointUrl = apiEndpoint + '/' + id;
        try {
            let response = await this.axios.delete(endPointUrl, BaseService.getAxiosConfig(jwt));
            return {
                ok: response.status <= 299,
                statusCode: response.status,
                data: response.data
            }
        } catch (err) {
            let error = err as AxiosError;
            return {
                ok: false,
                statusCode: error.response?.status ?? 500,
                messages: (error.response?.data as IMessages).messages
            }
        }
    }

    static async create<TEntity>(apiEndpoint: string, entity: TEntity, jwt?: string): Promise<IFetchResponse<TEntity>> {
        let entityDataJson = JSON.stringify(entity);
        
        try {
            let response = await this.axios.post(apiEndpoint, entityDataJson);
            return {
                ok: response.status <= 299,
                statusCode: response.status,
                data: response.data
            }
        }
        catch (err) {
            let error = err as AxiosError;
            return {
                ok: false,
                statusCode: error.response?.status ?? 500,
                messages: (error.response?.data as IMessages).messages
            }
        }
    }
}