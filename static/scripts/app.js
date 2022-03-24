import utils from "./utils";
import list from "./list";
import card from "./card";
import status from "./status";

const app = {
    baseUrl: 'http://localhost:5050/',

    init: function () {
        card.setUrl(app.baseUrl);
        utils.On();
        card.On();
        status.On();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
