import cardModule from "./card";

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
        let statusBx = document.createElement('span');
        statusBx.classList.add('card__status');
        statusBx.textContent = status.name;
        cardTitle.after(statusBx);
    },

    async updateStatus(e){
        e.preventDefault();
        //statusId?
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData);
        // console.log(obj);
        const cardId = Number(obj.cardId);
        console.log(cardId);
        try {
            const result = await fetch(cardModule.url+cardId, {
                method: 'PATCH',
                body: formData,
            });
            const data = await result.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
};

export default statusModule;