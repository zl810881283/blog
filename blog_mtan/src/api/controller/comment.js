'use strict';

import Base from './base.js';

export default class extends Base {
    async init(http) {
        super.init(http);
        this.modelInstance = this.model('comments');
        this.modelPk = await this.modelInstance.getPk();
    }

}