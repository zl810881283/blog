'use strict';exports.__esModule = true;var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$controller$res) {(0, _inherits3.default)(_class, _think$controller$res);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$controller$res.apply(this, arguments));}


    /**
     * some base method in here
     */_class.prototype.

    getAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
            data, _modelInstance$where;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:data = undefined;if (!
                            this.id) {_context.next = 7;break;}_context.next = 4;return (
                                this.modelInstance.
                                where((_modelInstance$where = {}, _modelInstance$where[this.modelPk] = this.id, _modelInstance$where)).
                                find());case 4:data = _context.sent;_context.next = 10;break;case 7:_context.next = 9;return (

                                this.modelInstance.
                                order({ 'meta.createAt': -1 }).
                                page(this.get('page')).
                                countSelect(true));case 9:data = _context.sent;case 10:return _context.abrupt('return', 

                            this.success(data));case 11:case 'end':return _context.stop();}}}, _callee, this);}));return function getAction() {return ref.apply(this, arguments);};}();_class.prototype.



    postAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
            data, 




            insertId;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:data = this.post();delete data[this.modelPk];if (!think.isEmpty(data)) {_context2.next = 4;break;}return _context2.abrupt('return', this.fail("data is empty"));case 4:_context2.next = 6;return this.modelInstance.add(data);case 6:insertId = _context2.sent;return _context2.abrupt('return', 
                            this.success({ id: insertId }));case 8:case 'end':return _context2.stop();}}}, _callee2, this);}));return function postAction() {return ref.apply(this, arguments);};}();_class.prototype.


    deleteAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var _modelInstance$where2;var 




            rows;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (this.id) {_context3.next = 2;break;}return _context3.abrupt('return', this.fail("params error"));case 2:_context3.next = 4;return this.modelInstance.where((_modelInstance$where2 = {}, _modelInstance$where2[this.modelPk] = this.id, _modelInstance$where2)).delete();case 4:rows = _context3.sent;return _context3.abrupt('return', 
                            this.success({ affectedRows: rows }));case 6:case 'end':return _context3.stop();}}}, _callee3, this);}));return function deleteAction() {return ref.apply(this, arguments);};}();_class.prototype.


    putAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var _modelInstance$where3;var 



            data, 




            rows;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (this.id) {_context4.next = 2;break;}return _context4.abrupt('return', this.fail("params error"));case 2:data = this.post();delete data[pk];if (!think.isEmpty(data)) {_context4.next = 6;break;}return _context4.abrupt('return', this.fail("data is empty"));case 6:_context4.next = 8;return this.modelInstance.where((_modelInstance$where3 = {}, _modelInstance$where3[this.modelPk] = this.id, _modelInstance$where3)).update(data);case 8:rows = _context4.sent;return _context4.abrupt('return', 
                            this.success({ affectedRows: rows }));case 10:case 'end':return _context4.stop();}}}, _callee4, this);}));return function putAction() {return ref.apply(this, arguments);};}();


    /**
     * @param obj the base object
     * @param arr array of Object which desc popular key and collection name. for example:{key:'author',ref:'users'}
     *
     */_class.prototype.
    populate = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(obj, arr) {var 
            model, 
            key, _iterator, _isArray, _i, _ref, 
            i, _iterator2, _isArray2, _i2, _ref2, 



            j;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:model = undefined;key = undefined;_iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 3:if (!_isArray) {_context5.next = 9;break;}if (!(_i >= _iterator.length)) {_context5.next = 6;break;}return _context5.abrupt('break', 44);case 6:_ref = _iterator[_i++];_context5.next = 13;break;case 9:_i = _iterator.next();if (!_i.done) {_context5.next = 12;break;}return _context5.abrupt('break', 44);case 12:_ref = _i.value;case 13:i = _ref;model = this.model(i.ref);key = i.key;if (!think.isArray(obj[key])) {_context5.next = 39;break;}_iterator2 = obj[key], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);case 18:if (!_isArray2) {_context5.next = 24;break;}if (!(_i2 >= _iterator2.length)) {_context5.next = 21;break;}return _context5.abrupt('break', 37);case 21:_ref2 = _iterator2[_i2++];_context5.next = 28;break;case 24:_i2 = _iterator2.next();if (!_i2.done) {_context5.next = 27;break;}return _context5.abrupt('break', 37);case 27:_ref2 = _i2.value;case 28:j = _ref2;_context5.t0 = 
                            obj[key];_context5.next = 32;return model.where({ '_id': j + '' }).find();case 32:_context5.t1 = _context5.sent;_context5.t0.push.call(_context5.t0, _context5.t1);
                            obj[key].shift();case 35:_context5.next = 18;break;case 37:_context5.next = 42;break;case 39:_context5.next = 41;return (


                                model.where({ '_id': obj[key] + '' }).find());case 41:obj[key] = _context5.sent;case 42:_context5.next = 3;break;case 44:return _context5.abrupt('return', 



                            obj);case 45:case 'end':return _context5.stop();}}}, _callee5, this);}));return function populate(_x, _x2) {return ref.apply(this, arguments);};}();return _class;}(think.controller.rest);exports.default = _class;