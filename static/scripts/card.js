import statusModule from "./status";
import listModule from "./list";
const cardModule = {
    url: null,
    On(){
    },
    
    setUrl(baseUrl){
        cardModule.url = baseUrl + "cards/";
        console.log(cardModule.url);
    },

    getCards(){
        const lists = document.querySelectorAll('.list');
        lists.forEach(async list => {
            let listId = Number(list.getAttribute('id'));
            let cards = await cardModule.getCardsFromList(listId);
            const fragment = document.createDocumentFragment();
            cards.forEach(card => {
                if(card.list_id === listId){
                    // console.log(`list: ${list.id}, card: ${card.title}`);
                    let formattedCard = cardModule.createCard(list, card);
                    // console.log(formattedCard);
                    formattedCard.style.display = "flex";
                    fragment.append(formattedCard);
                    statusModule.getCardStatus(formattedCard, card.status_id);
                }
            });
            const cardBx = list.childNodes[3];
            cardBx.append(fragment);
            listModule.setSortable(cardBx);
        });
    },

    async getCardsFromList(listId){
        try{
            const data = { id: listId };
            const result = await fetch(cardModule.url+listId);
            const cards = await result.json();
            return cards;
        }
        catch(err){
            console.log(err);
        }
    },
    
    createCard(list, card){
        const cardTemplate = document.querySelector('.cardTemplate').content.querySelector('.card');
        const cardBx = cardTemplate.cloneNode(true);
        cardBx.setAttribute("id", card.id);
        const title = cardBx.childNodes[1].childNodes[1];
        title.textContent = card.title;
        return cardBx;
    }
};

export default cardModule;