require('dotenv').config();
import "core-js/stable";
import "regenerator-runtime/runtime";
import utils from "./utils.js";
import list from "./list";
import cardModule from "./card";
import statusModule from "./status";
import listModule from "./list";

let NODE_ENV = null;
if(window.location.href === 'http://localhost:5050/'){
    NODE_ENV = "http://localhost:5050/";
}
else{
    NODE_ENV = 'https://kban.herokuapp.com/';
}
console.log(NODE_ENV);
const app = {
    baseUrl: NODE_ENV,
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
document.addEventListener('DOMContentLoaded', app.init);
