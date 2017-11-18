import { Observable } from 'rxjs';
import 'whatwg-fetch';
import { Query } from '../index';
import { Api, Headers, Method, Methods, Params } from './types';
import { Url } from './url';

export interface HttpOptions {

}

export interface FetchOptions<Body> {
    api: Api;
    params?: Params;
    query?: Query;
    body?: Body;
    headers?: Headers;
}

export class Http {

    private _url: Url;

    constructor(private _options: HttpOptions) {
        this._url = new Url({ env: '' });
    }

    get<T>(options: FetchOptions<null>) {
        return this._buildMethod<T>(Methods.GET, options);
    }

    post<T>(options: FetchOptions<T>) {
        return this._buildMethod<T>(Methods.POST, options);
    }

    patch<T>(options: FetchOptions<T>) {
        return this._buildMethod<T>(Methods.PATCH, options);
    }

    put<T>(options: FetchOptions<T>) {
        return this._buildMethod<T>(Methods.PUT, options);
    }

    delete<T>(options: FetchOptions<null>) {
        return this._buildMethod<T>(Methods.DELETE, options);
    }

    private async _buildMethod<T>(method: Method, options: FetchOptions<T | null>) {
        const { api, params, query, body, headers } = options;

        const url = this._url.create(api, params, query);

        const initData: RequestInit = { method, credentials: 'include' };

        if (method === Methods.POST || method === Methods.PUT || method === Methods.PATCH) initData.body = body;

        const req = new Request(url, initData);

        const res = await fetch(req);

        const json = res.json<{ data: T, status: number, message: string }>();

        return Observable.fromPromise(json);
    }

    private _log() {
        return '';
    }
}
