export type Param = string | boolean | number;
export type Params = Param[];

export interface Query {
    [key: string]: string | boolean | number;
}

export interface Body {
    [key: string]: string | boolean | number;
}

export interface Headers {
    [key: string]: string | boolean | number;
}

export interface Api {
    path: string;
    desc: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export const Methods: {[method in Method]: Method} = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};
