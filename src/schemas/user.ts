/**
 * user module schema.
 */
import { ObjectId } from './common';

export type UserId = ObjectId;

export type UserTarget = 'admin' | 'register';

export class User {
    _id?: UserId;
    username?: string;
    name?: string;
    email?: string;
    website?: string;
    target?: UserTarget;
};