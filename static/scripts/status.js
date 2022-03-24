const status= {
    url: null,
    On(){
        status.getCard();
    },
    
    setUrl(baseUrl){
        status.url = baseUrl + "status";
        console.log(status.url);
    },

    getCard(){
        const cards = document.querySelectorAll('.card');
        console.log(cards);
        cards.forEach(card => {
            let id = Number(card.getAttribute('id'));
            let stat = status.getstatusFromList(id);
            status.displaystatus(card, stat);
        });
    },

    async getstatusFromList(listId){
        try{
            console.log(listId);
            const result = await fetch(status.url);
            const stat = await result.json();
            console.log(stat);
        }
        catch(err){
            console.log(err);
        }
    },
    displaystatus(card, stat){
        console.log('coucou');
        console.log(card);
        let statusBx = document.createElement('span');
        statusBx.classList.add('card__status');
        statusBx.textContent = stat.name;
        card.append(status);
    }
};

export default status;