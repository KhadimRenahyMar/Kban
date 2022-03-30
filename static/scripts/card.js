import statusModule from "./status";
import listModule from "./list";
import utils from "./utils";

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
            cardModule.cardFormListeners()
            const cardBx = list.childNodes[3];
            cardBx.append(fragment);
            listModule.setSortableCards(cardBx);
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
    },

    cardFormListeners(){
        const createCardForm = document.querySelector('.createCardForm');
        createCardForm.addEventListener('submit', cardModule.createCardHandler);

        const addCardBtns = document.querySelectorAll('.list__addCardBtn');
        addCardBtns.forEach(btn => {
            btn.addEventListener('click', utils.displayAddCardModal);
        });


        const deleteBtns = document.querySelectorAll('.card__deleteBtn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', cardModule.deleteAlert);
        });
    },

    async createCardHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        console.log(dataObject);
        const modal = e.target.parentNode;
        const listId = Number(modal.getAttribute("listId"));
        try {
            const result = await fetch(cardModule.url+listId, {
                method: 'POST',
                body: formData,
            });
            const data = await result.json();
            console.log(data);
            utils.hideCreateCardModal();
            listModule.createCard(data);
            listModule.listFormListeners();
            utils.updateListListener();
        } catch (err) {
            console.log(err);
        }
    },

    deleteAlert(e) {
        const btn = e.target;
        const card = btn.parentNode.parentNode;
        const cardId = Number(card.getAttribute("id"));
        const alert = confirm('Voulez-vous vraiment supprimer cette carte?');
        if (alert) {
            cardModule.deleteCard(cardId, card);
        };
    },

    async deleteCard(cardId, card){
        console.log(card);
        try {
            // console.log(listModule.url + listId);
            const result = await fetch(cardModule.url + cardId, {
                method: 'DELETE',
            });
            const data = await result.json();
            // console.log(data);
            card.remove();
        } catch (err) {
            console.log(err);
        }
    },
};

export default cardModule;