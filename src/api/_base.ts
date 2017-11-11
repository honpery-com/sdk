import { APIs } from '../config';
import { Http } from '../core';

export class BaseAPI {
    static apis = APIs;
    static http = new Http({});
}
