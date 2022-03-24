(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utils = _interopRequireDefault(require("./utils"));

var _list = _interopRequireDefault(require("./list"));

var _card = _interopRequireDefault(require("./card"));

var _status = _interopRequireDefault(require("./status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = {
  baseUrl: 'http://localhost:5050/',
  init: function init() {
    _card["default"].setUrl(app.baseUrl);

    _utils["default"].On();

    _card["default"].On();

    console.log('coucou');

    _status["default"].On();
  }
};
document.addEventListener('DOMContentLoaded', app.init);

},{"./card":2,"./list":3,"./status":4,"./utils":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.card = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var card = {
  url: null,
  On: function On() {
    card.getList();
    console.log('coucou');
  },
  setUrl: function setUrl(baseUrl) {
    card.url = baseUrl + "cards";
    console.log(card.url);
  },
  getList: function getList() {
    console.log('coucou2');
    var lists = document.querySelectorAll('.list');
    lists.forEach(function (list) {
      var id = Number(list.getAttribute('id'));
      var cards = card.getCardsFromList(id);
      card.displayCards(list, cards);
      console.log(cards);
    });
  },
  getCardsFromList: function getCardsFromList(listId) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result, cards;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log(listId);
              _context.next = 4;
              return fetch(card.url);

            case 4:
              result = _context.sent;
              _context.next = 7;
              return result.json();

            case 7:
              cards = _context.sent;
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  displayCards: function displayCards(list, cards) {
    var cardTemplate = document.querySelector('.card');
    cards.forEach(function (card) {
      cardTemplate.cloneNode();
      list.append(cardTemplate);
    });
    list.append(cards);
  }
};
exports.card = card;
var _default = card;
exports["default"] = _default;
module.exports = card;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var list = {};
var _default = list;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var status = {
  url: null,
  On: function On() {
    status.getCard();
  },
  setUrl: function setUrl(baseUrl) {
    status.url = baseUrl + "status";
    console.log(status.url);
  },
  getCard: function getCard() {
    var cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach(function (card) {
      var id = Number(card.getAttribute('id'));
      var stat = status.getstatusFromList(id);
      status.displaystatus(card, stat);
    });
  },
  getstatusFromList: function getstatusFromList(listId) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result, stat;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log(listId);
              _context.next = 4;
              return fetch(status.url);

            case 4:
              result = _context.sent;
              _context.next = 7;
              return result.json();

            case 7:
              stat = _context.sent;
              console.log(stat);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }))();
  },
  displaystatus: function displaystatus(card, stat) {
    console.log('coucou');
    console.log(card);
    var statusBx = document.createElement('span');
    statusBx.classList.add('card__status');
    statusBx.textContent = stat.name;
    card.append(status);
  }
};
var _default = status;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var utils = {
  On: function On() {
    utils.addListListener();
  },
  addListListener: function addListListener() {
    var addBtn = document.querySelector('.addListBtn');
    addBtn.addEventListener('click', utils.displayModal);
  },
  displayModal: function displayModal(e) {
    var modal = document.querySelector('.modal__addList');
    modal.classList.add('modal__addList');
    var body = document.querySelector('.body');
    body.classList.add('modalOn');
    modal.style.display = "flex";
  },
  editListListener: function editListListener() {},
  deleteListListener: function deleteListListener() {},
  deleteCardListener: function deleteCardListener() {},
  editCardListener: function editCardListener() {},
  addCardListener: function addCardListener() {}
};
var _default = utils;
exports["default"] = _default;

},{}]},{},[1]);
