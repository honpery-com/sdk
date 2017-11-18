import { Id, Time } from './common';

export type RoleId = Id;

export interface Role {
    _id?: RoleId;
    name?: string;
    desc?: string;
    create_at?: Time;
    update_at?: Time;
}
