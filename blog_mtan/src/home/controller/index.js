'use strict';

import Base from './base.js';
var path = require('path');
export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let options = this.config('tpl');
        options = think.extend({}, options, {type: 'ejs', file_ext: '.html'});
        return this.display(undefined, options);
    }
}