/**
 * category schema.
 */
import { ObjectId, Timestamp } from './common';
import { UserId } from './user';

export type CategoryId = ObjectId;

export class Category {
    _id?: CategoryId;
    name?: string;
    description?: string;
    create_user?: UserId;
    create_time?: Timestamp;
    update_time?: Timestamp;
    delete?: boolean;
};