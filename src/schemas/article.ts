/**
 * article schema.
 */
import { ObjectId, Timestamp } from './common';
import { UserId } from './user';

export type ArticleId = ObjectId;

export class Article {
    _id?: ArticleId = '';
    title?: string = '';
    description?: string = '';
    body?: string = '';
    create_user?: UserId = '';
    create_time?: Timestamp = 0;
    update_time?: Timestamp = 0;
}