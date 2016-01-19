'use strict';exports.__esModule = true;var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var ObjectID = require('mongodb-core').BSON.ObjectID;var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.

    init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.modelInstance = this.model('comments');};_class.prototype.


    newestAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
            data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.modelInstance.
                            where().
                            order({ 'meta.createAt': -1 }).
                            limit(10).
                            select();case 2:data = _context.sent;return _context.abrupt('return', 
                            this.success(data));case 4:case 'end':return _context.stop();}}}, _callee, this);}));return function newestAction() {return ref.apply(this, arguments);};}();_class.prototype.


    articleAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
            aid, 
            pageNo, 
            data, _iterator, _isArray, _i, _ref, 



            comment;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:aid = ObjectID(this.get('id'));pageNo = this.get('pageNo');_context2.next = 4;return this.modelInstance.where({ article: aid, reply: { $eq: null } }).page(pageNo).countSelect(true);case 4:data = _context2.sent;_iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 6:if (!_isArray) {_context2.next = 12;break;}if (!(_i >= _iterator.length)) {_context2.next = 9;break;}return _context2.abrupt('break', 21);case 9:_ref = _iterator[_i++];_context2.next = 16;break;case 12:_i = _iterator.next();if (!_i.done) {_context2.next = 15;break;}return _context2.abrupt('break', 21);case 15:_ref = _i.value;case 16:comment = _ref;_context2.next = 19;return (
                                this.fillSubcomment(comment, aid));case 19:_context2.next = 6;break;case 21:return _context2.abrupt('return', 


                            this.success(data));case 22:case 'end':return _context2.stop();}}}, _callee2, this);}));return function articleAction() {return ref.apply(this, arguments);};}();_class.prototype.


    fillSubcomment = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(comment, aid) {var 
            id, 
            comments, _iterator2, _isArray2, _i2, _ref2, 





            i;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:id = ObjectID(comment._id);_context3.next = 3;return this.modelInstance.where({ article: aid, reply: id }).select();case 3:comments = _context3.sent;comment.subcomments = comments;_iterator2 = comments, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);case 6:if (!_isArray2) {_context3.next = 12;break;}if (!(_i2 >= _iterator2.length)) {_context3.next = 9;break;}return _context3.abrupt('break', 21);case 9:_ref2 = _iterator2[_i2++];_context3.next = 16;break;case 12:_i2 = _iterator2.next();if (!_i2.done) {_context3.next = 15;break;}return _context3.abrupt('break', 21);case 15:_ref2 = _i2.value;case 16:i = _ref2;_context3.next = 19;return (
                                this.fillSubcomment(i, aid));case 19:_context3.next = 6;break;case 21:case 'end':return _context3.stop();}}}, _callee3, this);}));return function fillSubcomment(_x, _x2) {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;