"use strict";
exports.__esModule = true;
require('dotenv').config();
var sequelize_1 = require("sequelize");
console.log(process.env.PG_URL);
var client = new sequelize_1.Sequelize(process.env.PG_URL, {
    define: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
});
exports["default"] = client;
