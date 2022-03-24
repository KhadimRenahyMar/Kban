const utils = {
    listenersOn(){
        utils.addListListener();
    },
    addListListener() {
        const addBtn = document.querySelector('.addListBtn');
        addBtn.addEventListener('click', utils.displayModal);
    },
    displayModal(e: Event) {
        console.log(e.target);
        const modal: HTMLDivElement = document.querySelector('.modal__addList');
        modal.classList.add('modal__addList');
        console.log(modal);
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
