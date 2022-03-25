import "core-js/stable";
import "regenerator-runtime/runtime";
import utils from "./utils.js";
import list from "./list";
import cardModule from "./card";
import statusModule from "./status";
import Sortable from 'sortablejs';
import listModule from "./list";

const app = {
    baseUrl: 'http://localhost:5050/',

    init() {
        cardModule.setUrl(app.baseUrl);
        statusModule.setUrl(app.baseUrl);
        listModule.setUrl(app.baseUrl);
        list.getLists();
        utils.On();
        cardModule.On();
        statusModule.On();
        listModule.On();
        app.listListeners();
    },
};

document.addEventListener('DOMContentLoaded', app.init);
