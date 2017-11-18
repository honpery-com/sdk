import { Id, Time } from './common';
import { UserId } from './user';

export type TagId = Id;

export interface Tag {
    _id?: TagId;
    name?: string;
    desc?: string;
    author?: UserId;
    is_top?: boolean;
    create_at?: Time;
    update_at?: Time;
}
