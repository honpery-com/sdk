/**
 * user module schema.
 */
import { ObjectId } from './common';

export type UserId = ObjectId;

export type UserTarget = 'admin' | 'register';

export interface UserSchema {
    _id: UserId;
    username: string;
    name: string;
    email: string;
    website: string;
    target: UserTarget;
};