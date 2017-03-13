/**
 * user module fetch.
 */
import { BaseFetch } from './base';

class userFetch extends BaseFetch {
    constructor() {
        super();
    }

    list() {
        return this._list();
    }

}

export const UserFetch = new userFetch;