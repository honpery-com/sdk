import { Observable } from 'rxjs/Observable';
import { Article, ArticleId } from '../types';
import { BaseAPI } from './_base';

export class ArticleAPI extends BaseAPI {

    static list(conditions: any = {}) {
        return this.http.get<Article[]>({
            api: this.apis.be.articles,
            query: conditions,
        });
    }

    static detail(article_id: ArticleId) {
        return this.http.get<Article>({
            api: this.apis.be.articles,
            params: [article_id],
        });
    }

    static create(article: Article) {
        return this.http.post<Article>({
            api: this.apis.be.articles,
            body: article,
        });
    }

    static update(article_id: ArticleId, article: Article) {
        return this.http.patch<Article>({
            api: this.apis.be.articles,
            params: [article_id],
            body: article,
        });
    }

    static publish(article_id: ArticleId) {
        return this.http.patch<Article>({
            api: this.apis.be.articles,
            params: [article_id],
            body: {},
        });
    }

    static delete(article_id: ArticleId) {
        return this.http.delete<Article>({
            api: this.apis.be.articles,
            params: [article_id],
        });
    }
}
