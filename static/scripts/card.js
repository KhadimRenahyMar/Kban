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
    
    createCard(list, card){
        const cardTemplate = document.querySelector('.cardTemplate').content.querySelector('.card');
        const cardEl = cardTemplate.cloneNode(true);
        cardEl.setAttribute("id", card.id);
        const title = cardEl.childNodes[1].childNodes[1];
        title.textContent = card.title;
        const cardBx = list.childNodes[3].childNodes[1];
        
        cardBx.append(cardEl);

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