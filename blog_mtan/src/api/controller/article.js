'use strict';

import Base from './base.js';

export default class extends Base {
    async init(http) {
        super.init(http);
        this.modelInstance = this.model('articles');
        this.modelPk = await this.modelInstance.getPk();
    }


    async getAction() {
        if (this.id) {
            let article = await this.modelInstance
                .where({[this.modelPk]: this.id})
                .find();
            if (think.isEmpty(article)){
                return this.fail('NO_THIS_ARTICLE');
            }

            await this.populate(article, [
                {key: 'author', ref: 'users'},
                {key: 'clazz', ref: 'articleclasses'},
                {key: 'keywords', ref: 'articlekeywords'}
            ]);
            delete article.author.password;
            return this.success(article);

        } else {
            let data = await this.modelInstance
                .order({'meta.createAt': -1})
                .page(this.get('pageNo'))
                .countSelect(true);
            for (let article of data.data) {
                await this.populate(article, [
                    {key: 'author', ref: 'users'},
                    {key: 'clazz', ref: 'articleclasses'},
                    {key: 'keywords', ref: 'articlekeywords'}
                ])
            }

            return this.success(data);
        }

    }


}