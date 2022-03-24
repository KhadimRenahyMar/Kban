const utils = {
    On(){
        utils.addListListener();
    },
    addListListener() {
        const addBtn = document.querySelector('.addListBtn');
        addBtn.addEventListener('click', utils.displayModal);
    },
    displayModal(e) {
        const modal = document.querySelector('.modal__addList');
        modal.classList.add('modal__addList');
        const body= document.querySelector('.body');
        body.classList.add('modalOn');
        modal.style.display = "flex";
    },
    editListListener() {
    },
    deleteListListener() {
    },
    deleteCardListener() {
    },
    editCardListener() {
    },
    addCardListener() {
    }
};

export default utils;
