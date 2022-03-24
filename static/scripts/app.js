"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var app = {
    init: function () {
        utils_1["default"].listenersOn();
    }
};
document.addEventListener('DOMContentLoaded', app.init);
