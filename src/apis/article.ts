/**
 * article api.
 */
import { Article, ArticleId } from '../schemas';
import { Observable } from 'rxjs/Rx';

const articles = {
    "1": {
        _id: "1",
        title: "测试文章",
        description: '测试文章',
        body: "测试文章文章文章",
        category: "前端开发",
        create_user: "张三",
        create_time: new Date().getTime(),
        update_time: new Date().getTime()
    },
    "2": {
        _id: "2",
        title: "测试文章",
        description: '测试文章',
        body: "测试文章文章文章",
        category: "前端开发",
        create_user: "张三",
        create_time: new Date().getTime(),
        update_time: new Date().getTime()
    },
    "3": {
        _id: "3",
        title: "测试文章",
        description: '测试文章',
        body: "测试文章文章文章",
        category: "前端开发",
        create_user: "张三",
        create_time: new Date().getTime(),
        update_time: new Date().getTime()
    },
}

class articleApi {
    list(conditions = {}) {
        return Observable.of(Object.values(articles));
    }

    detail(article_id: ArticleId) {
        return Observable.of(articles[article_id]);
    }

}

export const ArticleAPI = new articleApi;