require('dotenv').config();
import "core-js/stable";
import "regenerator-runtime/runtime";
import utils from "./utils.js";
import list from "./list";
import cardModule from "./card";
import statusModule from "./status";
import listModule from "./list";
console.log(window.location.href);
console.log("process", process);
console.log("env", process.env);
console.log("node", process.env.NODE_ENV);
const app = {
    baseUrl: process.env.NODE_ENV === "production" ? 'https://kban.herokuapp.com/' : 'http://localhost:5050/',
    init() {
        cardModule.setUrl(app.baseUrl);
        statusModule.setUrl(app.baseUrl);
        listModule.setUrl(app.baseUrl);
        list.getLists();
        utils.On();
        statusModule.On();
        listModule.On();
    },
};
console.log("base",app.baseUrl);
document.addEventListener('DOMContentLoaded', app.init);
