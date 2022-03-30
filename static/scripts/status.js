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
    }
};

export default statusModule;