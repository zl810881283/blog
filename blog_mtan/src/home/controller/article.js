'use strict';

import Base from './base.js';

export default class extends Base {
    init(http){
        super.init(http);
        this.modelInstance=this.model('articles');

    }
    async hottestAction() {
        let data = await this.modelInstance
            .where()
            .order({'clickTimes': -1})
            .limit(10)
            .select();
        for (let article of data) {
            await this.populate(article, [
                {key: 'author', ref: 'users'},
                {key: 'clazz', ref: 'articleclasses'},
                {key: 'keywords', ref: 'articlekeywords'}
            ])
        }
        return this.success(data);
    }
}