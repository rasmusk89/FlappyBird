import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiBaseUrl } from '../configuration';
import { IFetchResponse } from '../types/IFetchResponse';
import { IMessages } from './IMessages';

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
}