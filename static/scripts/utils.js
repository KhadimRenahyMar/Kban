import cardModule from "./card";

const utils = {
    On(){
        utils.addListListener();
    },
    
    addListListener() {
        const addBtn = document.querySelector('.addListBtn');
        addBtn.addEventListener('click', utils.displayCreateListModal);
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

    // resetList(){
    //         //nettoyer listBx
    //         const lists = document.querySelectorAll('.list');
    //         console.log(lists);
    //         lists.forEach(list => {
    //             list.remove();
    //         });
    //         //relancer getCard()
    //         cardModule.getCards();
    // }
};

export default utils;
