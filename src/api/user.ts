import { Observable } from 'rxjs/Observable';
import { User, UserId } from '../types';
import { BaseAPI } from './_base';

export class UserAPI extends BaseAPI {

    static list(conditions: any = {}) {
        return this.http.get<User[]>({
            api: this.apis.be.users,
            query: conditions,
        });
    }

    static detail(user_id: UserId) {
        return this.http.get<User>({
            api: this.apis.be.users,
            params: [user_id],
        });
    }

    static create(user: User) {
        return this.http.post<User>({
            api: this.apis.be.users,
            body: user,
        });
    }

    static update(user_id: UserId, user: User) {
        return this.http.patch<User>({
            api: this.apis.be.users,
            params: [user_id],
            body: user,
        });
    }
}
