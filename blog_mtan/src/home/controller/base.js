'use strict';

export default class extends think.controller.base {

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