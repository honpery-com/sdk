/**
 * fetch class.
 */
import 'isomorphic-fetch';
import { Observable } from 'rxjs';
import { Param, Conditions } from '../metadata';
import { API, SERVER } from '../config';

export type Action = 'list' | 'detail' | 'create' | 'update' | 'delete';

export type AllowMethod = 'get' | 'post' | 'patch' | 'delete';

interface BuildOptions {
    method: AllowMethod;
    api: string;
    params: Param[];
    conditions?: Conditions;
    newData?: any;
};

interface FetchOptions {
    method: AllowMethod;
    body?: any;
}

export class Fetch<T> {

    loading: { [action: string]: { [api: string]: boolean } } = {};


    _list(api: string, params: Param[] = [], conditions: Conditions = {}): Observable<T> {
        return this.buildMethod<T>({ method: 'get', api, params, conditions });
    }

    _detail(api: string, params: Param[] = [], conditions: Conditions = {}): Observable<T> {
        return this.buildMethod<T>({ method: 'get', api, params, conditions });
    }

    _create(api: string, params: Param[], newData: T): Observable<T> {
        return this.buildMethod<T>({ method: 'post', api, params, newData });
    }

    _update(api: string, params: Param[], newData: T): Observable<T> {
        return this.buildMethod<T>({ method: 'patch', api, params, newData });
    }

    _delete(api: string, params: Param[]): Observable<T> {
        return this.buildMethod<T>({ method: 'delete', api, params });
    }

    // gen url.
    _url(api: string, params: Param[] = [], conditions: Conditions = {}): string {
        let result = SERVER + API[api];

        // params handler.
        result.replace(new RegExp('\{[a-zA-Z0-9_]+\}', 'g'), substr => {
            if (!params.length) throw new Error('Api params length is error.');
            return <string>params.shift();
        });
        if (params.length) result += `/${params.join('/')}`;

        // conditions handler.
        result += '?' + Object.keys(conditions).map(key => {
            let value = conditions[key];
            if (!value && value !== false) return;
            return (Array.isArray(value) ? value : [value]).map(v => `${key}=${v}&`).join('');
        }).join('');

        return result.substr(0, result.length - 1);
    }

    // build fetch methods.
    private buildMethod<T>(options: BuildOptions): Observable<T> {
        const { api, params = [], conditions = {}, newData, method } = options;

        let fetchOptions: FetchOptions = { method };
        if (['post', 'patch'].indexOf(method) >= 0) fetchOptions.body = newData;

        return Observable.fromPromise(fetch(this._url(api, params, conditions), fetchOptions))
            .map(res => {
                return res.json();
            }).share().catch(this.handleError);
    }

    // handler error.
    private handleError(error) {
        console.error(error);
        return Observable.throw(error);
    }
}