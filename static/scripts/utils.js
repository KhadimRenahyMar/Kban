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
        e.preventDefault();
        const listHeader = e.currentTarget.parentNode.parentNode;
        // console.log(listHeader.childNodes);
        const listTitle = listHeader.childNodes[1];
        listTitle.classList.toggle('is-hidden');
        // console.log(listTitle);
        const updateForm = listHeader.childNodes[3];
        updateForm.classList.toggle('is-hidden');
        // console.log(updateForm);
    },
};

export default utils;
