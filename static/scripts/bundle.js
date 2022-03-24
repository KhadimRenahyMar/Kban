(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var utils_1 = require("./utils");

var app = {
  init: function init() {
    utils_1["default"].listenersOn();
  }
};
document.addEventListener('DOMContentLoaded', app.init);

},{"./utils":2}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var utils = {
  listenersOn: function listenersOn() {
    utils.addListListener();
  },
  addListListener: function addListListener() {
    var addBtn = document.querySelector('.addListBtn');
    addBtn.addEventListener('click', utils.displayModal);
  },
  displayModal: function displayModal(e) {
    console.log(e.target);
    var modal = document.querySelector('.modal__addList');
    modal.classList.add('modal__addList');
    console.log(modal);
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
exports["default"] = utils;

},{}]},{},[1]);
