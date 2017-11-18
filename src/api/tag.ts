import { Observable } from 'rxjs/Observable';
import { Tag, TagId } from '../types';
import { BaseAPI } from './_base';

export class TagAPI extends BaseAPI {

    static list(conditions: any = {}) {
        return this.http.get<Tag[]>({
            api: this.apis.be.tags,
            query: conditions,
        });
    }

    static detail(tag_id: TagId) {
        return this.http.get<Tag>({
            api: this.apis.be.tags,
            params: [tag_id],
        });
    }

    static create(tag: Tag) {
        return this.http.post<Tag>({
            api: this.apis.be.tags,
            body: tag,
        });
    }

    static update(tag_id: TagId, tag: Tag) {
        return this.http.patch<Tag>({
            api: this.apis.be.tags,
            params: [tag_id],
            body: tag,
        });
    }
}
