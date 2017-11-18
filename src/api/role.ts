import { Observable } from 'rxjs/Observable';
import { Role, RoleId } from '../types';
import { BaseAPI } from './_base';

export class RoleAPI extends BaseAPI {

    static list(conditions: any = {}) {
        return this.http.get<Role[]>({
            api: this.apis.be.roles,
            query: conditions,
        });
    }

    static detail(role_id: RoleId) {
        return this.http.get<Role>({
            api: this.apis.be.roles,
            params: [role_id],
        });
    }

    static create(role: Role) {
        return this.http.post<Role>({
            api: this.apis.be.roles,
            body: role,
        });
    }

    static update(role_id: RoleId, role: Role) {
        return this.http.patch<Role>({
            api: this.apis.be.roles,
            params: [role_id],
            body: role,
        });
    }
}
