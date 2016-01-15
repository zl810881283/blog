'use strict';

export default class extends think.controller.rest {
    /**
     * some base method in here
     */

    async getAction() {
        let data;
        if (this.id) {
            data = await this.modelInstance
                .where({[this.modelPk]: this.id})
                .find();
        } else {
            data = await this.modelInstance
                .order({'meta.createAt': -1})
                .page(this.get('page'))
                .countSelect(true);
        }
        return this.success(data);

    }

    async postAction() {
        let data = this.post();
        delete data[this.modelPk];
        if (think.isEmpty(data)) {
            return this.fail("data is empty");
        }
        let insertId = await this.modelInstance.add(data);
        return this.success({id: insertId});
    }

    async deleteAction() {
        if (!this.id) {
            return this.fail("params error");
        }

        let rows = await this.modelInstance.where({[this.modelPk]: this.id}).delete();
        return this.success({affectedRows: rows});
    }

    async putAction() {
        if (!this.id) {
            return this.fail("params error");
        }
        let data = this.post();
        delete data[pk];
        if (think.isEmpty(data)) {
            return this.fail("data is empty");
        }
        let rows = await this.modelInstance.where({[this.modelPk]: this.id}).update(data);
        return this.success({affectedRows: rows});
    }

    /**
     * @param obj the base object
     * @param arr array of Object which desc popular key and collection name. for example:{key:'author',ref:'users'}
     *
     */
    async populate(obj, arr) {
        let model;
        let key;
        for (let i of arr) {
            model = this.model(i.ref);
            key = i.key;
            if (think.isArray(obj[key])) {
                for (let j of obj[key]) {
                    obj[key].push(await model.where({'_id': j + ''}).find());
                    obj[key].shift();
                }
            } else {
                obj[key] = await model.where({'_id': obj[key] + ''}).find();
            }

        }
        return obj;
    }
    

}