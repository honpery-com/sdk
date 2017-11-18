import { Id, Time } from './common';
import { Tag, TagId } from './tag';
import { UserId } from './user';

export type ArticleId = Id;

export interface Article {
    _id?: ArticleId;
    title?: string;
    desc?: string;
    body?: string;
    tags?: Tag[];
    tag_ids?: TagId[];
    author?: UserId;
    create_at?: Time;
    update_at?: Time;
    publish_at?: Time;
    latest_at?: Time;
}
