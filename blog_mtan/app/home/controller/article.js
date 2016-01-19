'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.




    init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.modelInstance = this.model('articles');};_class.prototype.


    hottestAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
            data, _iterator, _isArray, _i, _ref, 




            article;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.modelInstance.where().order({ 'clickTimes': -1 }).limit(10).select();case 2:data = _context.sent;_iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 4:if (!_isArray) {_context.next = 10;break;}if (!(_i >= _iterator.length)) {_context.next = 7;break;}return _context.abrupt('break', 19);case 7:_ref = _iterator[_i++];_context.next = 14;break;case 10:_i = _iterator.next();if (!_i.done) {_context.next = 13;break;}return _context.abrupt('break', 19);case 13:_ref = _i.value;case 14:article = _ref;_context.next = 17;return (
                                this.populate(article, [
                                { key: 'author', ref: 'users' }, 
                                { key: 'clazz', ref: 'articleclasses' }, 
                                { key: 'keywords', ref: 'articlekeywords' }]));case 17:_context.next = 4;break;case 19:return _context.abrupt('return', 


                            this.success(data));case 20:case 'end':return _context.stop();}}}, _callee, this);}));return function hottestAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;