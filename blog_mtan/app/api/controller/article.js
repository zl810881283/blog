'use strict';exports.__esModule = true;var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.




    init = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(http) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            _Base.prototype.init.call(this, http);
                            this.modelInstance = this.model('articles');_context.next = 4;return (
                                this.modelInstance.getPk());case 4:this.modelPk = _context.sent;case 5:case 'end':return _context.stop();}}}, _callee, this);}));return function init(_x) {return ref.apply(this, arguments);};}();_class.prototype.



    getAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var _modelInstance$where, 





















            article, data, _iterator, _isArray, _i, _ref;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!this.id) {_context2.next = 12;break;}_context2.next = 3;return this.modelInstance.where((_modelInstance$where = {}, _modelInstance$where[this.modelPk] = this.id, _modelInstance$where)).find();case 3:article = _context2.sent;if (!think.isEmpty(article)) {_context2.next = 6;break;}return _context2.abrupt('return', this.fail('NO_THIS_ARTICLE'));case 6:_context2.next = 8;return this.populate(article, [{ key: 'author', ref: 'users' }, { key: 'clazz', ref: 'articleclasses' }, { key: 'keywords', ref: 'articlekeywords' }]);case 8:delete article.author.password;return _context2.abrupt('return', this.success(article));case 12:_context2.next = 14;return this.modelInstance.order({ 'meta.createAt': -1 }).page(this.get('pageNo')).countSelect(true);case 14:data = _context2.sent;_iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 16:if (!_isArray) {_context2.next = 22;break;}if (!(_i >= _iterator.length)) {_context2.next = 19;break;}return _context2.abrupt('break', 31);case 19:_ref = _iterator[_i++];_context2.next = 26;break;case 22:_i = _iterator.next();if (!_i.done) {_context2.next = 25;break;}return _context2.abrupt('break', 31);case 25:_ref = _i.value;case 26:article = _ref;_context2.next = 29;return (
                                this.populate(article, [
                                { key: 'author', ref: 'users' }, 
                                { key: 'clazz', ref: 'articleclasses' }, 
                                { key: 'keywords', ref: 'articlekeywords' }]));case 29:_context2.next = 16;break;case 31:return _context2.abrupt('return', 



                            this.success(data));case 32:case 'end':return _context2.stop();}}}, _callee2, this);}));return function getAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;