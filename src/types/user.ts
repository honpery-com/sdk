import { Id, Time } from './common';

export type UserId = Id;

export interface User {
    _id?: UserId;
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    site?: string;
    create_at?: Time;
    update_at?: Time;
}
