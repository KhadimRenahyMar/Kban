import utils from "./utils";

const app = {
    init: function () {
        utils.listenersOn();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
