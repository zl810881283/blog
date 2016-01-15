'use strict';

import Base from './base.js';
let ObjectID = require('mongodb-core').BSON.ObjectID;
export default class extends Base {
    init(http) {
        super.init(http);
        this.modelInstance = this.model('comments');
    }

    async newestAction() {
        let data = await this.modelInstance
            .where()
            .order({'meta.createAt': -1})
            .limit(10)
            .select();
        return this.success(data);
    }

    async articleAction() {
        let aid = ObjectID(this.get('id'));
        let pageNo = this.get('pageNo');
        let data = await this.modelInstance
            .where({article: aid, reply: {$eq: null}})
            .page(pageNo)
            .countSelect(true);
        for (let comment of data.data) {
            await this.fillSubcomment(comment, aid);
        }

        return this.success(data)
    }

    async fillSubcomment(comment, aid) {
        let id = ObjectID(comment._id);
        let comments = await this.modelInstance
            .where({article: aid, reply: id})
            .select();

        comment.subcomments = comments;

        for (let i of comments) {
            await this.fillSubcomment(i, aid);
        }
    }
}