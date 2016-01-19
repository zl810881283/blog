'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$controller$bas) {(0, _inherits3.default)(_class, _think$controller$bas);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));}



    /**
     * @param obj the base object
     * @param arr array of Object which desc popular key and collection name. for example:{key:'author',ref:'users'}
     *
     */_class.prototype.
    populate = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(obj, arr) {var 
            model, 
            key, _iterator, _isArray, _i, _ref, 
            i, _iterator2, _isArray2, _i2, _ref2, 



            j;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:model = undefined;key = undefined;_iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 3:if (!_isArray) {_context.next = 9;break;}if (!(_i >= _iterator.length)) {_context.next = 6;break;}return _context.abrupt('break', 44);case 6:_ref = _iterator[_i++];_context.next = 13;break;case 9:_i = _iterator.next();if (!_i.done) {_context.next = 12;break;}return _context.abrupt('break', 44);case 12:_ref = _i.value;case 13:i = _ref;model = this.model(i.ref);key = i.key;if (!think.isArray(obj[key])) {_context.next = 39;break;}_iterator2 = obj[key], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);case 18:if (!_isArray2) {_context.next = 24;break;}if (!(_i2 >= _iterator2.length)) {_context.next = 21;break;}return _context.abrupt('break', 37);case 21:_ref2 = _iterator2[_i2++];_context.next = 28;break;case 24:_i2 = _iterator2.next();if (!_i2.done) {_context.next = 27;break;}return _context.abrupt('break', 37);case 27:_ref2 = _i2.value;case 28:j = _ref2;_context.t0 = 
                            obj[key];_context.next = 32;return model.where({ '_id': j + '' }).find();case 32:_context.t1 = _context.sent;_context.t0.push.call(_context.t0, _context.t1);
                            obj[key].shift();case 35:_context.next = 18;break;case 37:_context.next = 42;break;case 39:_context.next = 41;return (


                                model.where({ '_id': obj[key] + '' }).find());case 41:obj[key] = _context.sent;case 42:_context.next = 3;break;case 44:return _context.abrupt('return', 



                            obj);case 45:case 'end':return _context.stop();}}}, _callee, this);}));return function populate(_x, _x2) {return ref.apply(this, arguments);};}();return _class;}(think.controller.base);exports.default = _class;