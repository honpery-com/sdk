/**
 * tag module schema.
 */
import { ObjectId, Timestamp } from './common';
import { UserId } from './user';

export type TagId = ObjectId;

export interface TagSchema {
    _id: TagId;
    name: string;
    description: string;
    create_user: UserId;
    create_time: Timestamp;
    update_time: Timestamp;
    delete: boolean;
};