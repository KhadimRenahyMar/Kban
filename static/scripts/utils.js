import cardModule from "./card";
import statusModule from './status';

const utils = {
    On(){
        utils.addListListener();
    },
    
    addListListener() {
        const addBtn = document.querySelector('.addListBtn');
        addBtn.addEventListener('click', utils.displayCreateListModal);
    },
    
    updateListListener(){
        const editBtns = document.querySelectorAll('.list__editIcon');
        editBtns.forEach(btn => {
            btn.addEventListener('click', utils.displayUpdateListField);
        });
    },

    getListPosition(){
        const DOMlists = document.querySelectorAll('.list');
        let compteur = null;
        for(compteur = 0; compteur < DOMlists.length; compteur++){
            compteur +1;
        };
        return compteur +1;
    },

    displayCreateListModal(e) {
        const body = document.querySelector('.body');
        body.classList.add('modalOn');
        const position = Number(utils.getListPosition());
        // console.log(position);
        const modal = document.querySelector('.modal__addList');
        const form = modal.childNodes[5];
        const inputBx = form.childNodes[5];
        const positionInput = inputBx.childNodes[1];
        positionInput.setAttribute('value', position);
        modal.classList.add('is-active');
        const closeBtn = modal.childNodes[1];
        closeBtn.addEventListener('click', utils.hideListModal);
    },

    hideListModal(){
        const modal = document.querySelector('.modal__addList');
        modal.classList.remove('is-active');
    },
    
    displayUpdateListField(e){
        const listHeader = e.currentTarget.parentNode.parentNode;
        const listTitle = listHeader.childNodes[1];
        const updateForm = listHeader.childNodes[3];
        if(!listTitle.classList.contains('is-hidden')){
            listTitle.classList.add('is-hidden');
        }
        else{
            listTitle.classList.remove('is-hidden');     
        }
        if(!updateForm.classList.contains('is-hidden')){
            updateForm.classList.add('is-hidden');
        }
        else{
            updateForm.classList.remove('is-hidden');
        }
    },

    hideUpdateListField(target, name){
        const form = target;
        const title = form.parentNode.childNodes[1];
        form.classList.add('is-hidden');
        title.textContent = name;
        title.classList.remove('is-hidden');
    },

    getCardPosition(list){
        const cardBx = list.childNodes[3].childNodes[1];
        let compteur = null;
        const cardNumber = cardBx.getElementsByTagName('li').length;
        const position = cardNumber + 1;
        return position
    },

    displayAddCardModal(e){
        const body = document.querySelector('.body');
        body.classList.add('modalOn');
        const modal = document.querySelector('.modal__addCard');
        modal.classList.add('is-active');
        const list = e.target.parentNode;
        const listId = Number(list.getAttribute("id"));
        const position = utils.getCardPosition(list);
        // console.log(position);
        modal.setAttribute('listId', listId);
        const hiddenInput = modal.childNodes[5].childNodes[5].childNodes[1];
        hiddenInput.value = position;
        const closeBtn = modal.childNodes[1];
        closeBtn.addEventListener('click', utils.hideCreateCardModal);
    },
    
    hideCreateCardModal(){
        const modal = document.querySelector('.modal__addCard');
        modal.classList.remove('is-active');
    },

    updateCardListener(){
        const editBtns = document.querySelectorAll('.card__editIcon');
        editBtns.forEach(btn => {
            btn.addEventListener('click', utils.displayUpdateCardField);
        });

        const statusBtns = document.querySelectorAll('.card__status');
        statusBtns.forEach(btn => {
            btn.addEventListener('dblclick', utils.displayUpdateStatusField);
        });
    },

    displayUpdateCardField(e){
        const icn = e.currentTarget;
        const cardBx = icn.parentNode.parentNode;
        const cardHeader = cardBx.childNodes[1];
        const cardTitle = cardHeader.childNodes[1];
        const updateForm = cardHeader.childNodes[3];
        
        const cardId = Number(updateForm.parentNode.parentNode.getAttribute('id'));
        const cardIdInput = document.createElement('input');
        cardIdInput.classList.add('modalForm__input');
        cardIdInput.setAttribute('name', 'cardId');
        cardIdInput.setAttribute('value', cardId);
        cardIdInput.setAttribute('type', "hidden");
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('modalForm__inputBx');
        inputDiv.append(cardIdInput);
        updateForm.childNodes[3].before(inputDiv);
        // console.log(updateForm);
        
        if(!cardTitle.classList.contains('is-hidden')){
            cardTitle.classList.add('is-hidden');
        }
        else{
            cardTitle.classList.remove('is-hidden');
            console.log(updateForm);
            inputDiv.remove();
            updateForm.childNodes[3].remove();
            console.log(updateForm.childNodes[3]);
        }
        if(!updateForm.classList.contains('is-hidden')){
            updateForm.classList.add('is-hidden');
            inputDiv.remove();
            console.log(updateForm);
        }
        else{
            updateForm.classList.remove('is-hidden');
        }
    },

    hideUpdateCardField(form, newTitle){
        const title = form.parentNode.childNodes[1];
        title.textContent = newTitle;
        title.classList.remove('is-hidden');
        form.childNodes[3].remove();
        form.classList.add('is-hidden');
    },
    
    async displayUpdateStatusField(e){
        
        const form = document.createElement('form');
        form.classList.add('card__updateField');
        
        const statusEl = e.target;
        const title = statusEl.parentNode.childNodes[1];
        title.after(form);
        const select = document.createElement('select');
        select.classList.add('card__select');
        select.classList.add('form__input');
        const card = statusEl.parentNode.parentNode;
        const cardId = Number(card.getAttribute('id'));
        select.setAttribute('value', cardId);
        select.setAttribute('name', 'statusId');
        
        const idInput = document.createElement('input');
        idInput.setAttribute('name', 'cardId');
        idInput.setAttribute('value', cardId);
        idInput.setAttribute('type', 'hidden');
        form.append(idInput);
        statusEl.remove();
        
        const validateBtn = document.createElement('button');
        validateBtn.classList.add('button');
        validateBtn.classList.add('validate-button');
        validateBtn.textContent = 'V';

        const statusList = await statusModule.getStatusList();
        // console.log(statusList);
        for(const status of statusList) {
            const option = document.createElement('option');
            option.textContent = status.name;
            option.setAttribute('value', status.id);
            select.append(option);
        };
        
        form.append(select);
        select.after(validateBtn);

        form.addEventListener('submit', statusModule.updateStatus);
    },

    hideUpdateStatusField(form, status){
        // console.log(status);
        const cardEl = form.parentNode.parentNode;
        statusModule.displayStatus(cardEl, status);
        form.remove();
        utils.updateCardListener();
    },
};

export default utils;
