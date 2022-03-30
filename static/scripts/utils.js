import cardModule from "./card";

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
            btn.addEventListener('click', utils.displayUpdateListModal);
        });
    },

    displayCreateListModal(e) {
        const body = document.querySelector('.body');
        body.classList.add('modalOn');
        const modal = document.querySelector('.modal__addList');
        modal.classList.add('is-active');
        const closeBtn = modal.childNodes[1];
        closeBtn.addEventListener('click', utils.hideCreateListModal);
    },

    hideCreateListModal(){
        const modal = document.querySelector('.modal__addList');
        modal.classList.remove('is-active');
    },
    
    displayUpdateListModal(e){
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

    hideUpdateListModal(target, name){
        const form = target;
        const title = form.parentNode.childNodes[1];
        form.classList.add('is-hidden');
        title.textContent = name;
        title.classList.remove('is-hidden');
    },

    displayAddCardModal(e){
        const body = document.querySelector('.body');
        body.classList.add('modalOn');
        const modal = document.querySelector('.modal__addCard');
        modal.classList.add('is-active');
        const list = e.target.parentNode;
        const listId = Number(list.getAttribute("id"));
        modal.setAttribute('listId', listId);
        const closeBtn = modal.childNodes[1];
        closeBtn.addEventListener('click', utils.hideCreateCardModal);
    },
    
    hideCreateCardModal(){
        const modal = document.querySelector('.modal__addCard');
        modal.classList.remove('is-active');
    }
};

export default utils;
