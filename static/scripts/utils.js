"use strict";
exports.__esModule = true;
var utils = {
    listenersOn: function () {
        utils.addListListener();
    },
    addListListener: function () {
        var addBtn = document.querySelector('.addListBtn');
        addBtn.addEventListener('click', utils.displayModal);
    },
    displayModal: function (e) {
        console.log(e.target);
        var modal = document.querySelector('.modal__addList');
        modal.classList.add('modal__addList');
        console.log(modal);
        var body = document.querySelector('.body');
        body.classList.add('modalOn');
        modal.style.display = "flex";
    },
    editListListener: function () {
    },
    deleteListListener: function () {
    },
    deleteCardListener: function () {
    },
    editCardListener: function () {
    },
    addCardListener: function () {
    }
};
exports["default"] = utils;
