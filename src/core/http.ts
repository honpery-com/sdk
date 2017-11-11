import { Query } from '../index';
import { Api, Body, Headers, Method, Methods, Params } from './types';
import { Url } from './url';

export interface HttpOptions {

}

export interface FetchOptions {
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

    get(options: FetchOptions) {
        return this._buildMethod(Methods.GET, options);
    }

    post(options: FetchOptions) {
        return this._buildMethod(Methods.POST, options);
    }

    patch(options: FetchOptions) {
        return this._buildMethod(Methods.PATCH, options);
    }

    put(options: FetchOptions) {
        return this._buildMethod(Methods.PUT, options);
    }

    delete(options: FetchOptions) {
        return this._buildMethod(Methods.DELETE, options);
    }

    private _buildMethod(method: Method, options: FetchOptions) {
        return '';
    }
}
