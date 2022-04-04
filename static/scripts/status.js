import cardModule from "./card";
import utils from "./utils";

const statusModule = {
    url: null,
    On() {

    },

    setUrl(baseUrl) {
        statusModule.url = baseUrl + "status";
        console.log(statusModule.url);
    },

    async getStatusList() {
        try {
            const result = await fetch(statusModule.url);
            const statusList = await result.json();
            return statusList;
        } catch (err) {
            console.log(err);
        }
    },

    displayStatus(card, status) {
        let cardTitle = card.childNodes[1].childNodes[1];
        let statusBx = document.createElement('button');
        statusBx.classList.add('card__status');
        statusBx.setAttribute('id', status.id);
        statusBx.textContent = status.name;
        statusBx.style.backgroundColor = status.color;
        cardTitle.after(statusBx);
    },

    async updateStatus(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData);
        console.log(obj);
        const cardId = Number(obj.cardId);
        try {
            const result = await fetch(cardModule.url+cardId, {
                method: 'PATCH',
                body: formData,
            });
            const data = await result.json();
            console.log(data);
            utils.hideUpdateStatusField(e.target, data);
        } catch (error) {
            console.log(error);
        }
    }
};

export default statusModule;