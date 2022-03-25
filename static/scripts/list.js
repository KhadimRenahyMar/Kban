import Sortable from 'sortablejs';
import cardModule from './card';
import utils from './utils';

const listModule = {
    url: null,

    On() {},

    setUrl(baseUrl) {
        listModule.url = baseUrl + "lists/";
        console.log(listModule.url);
    },

    async getLists() {
        try {
            const result = await fetch(listModule.url);
            const lists = await result.json();
            lists.forEach(list => {
                listModule.makeList(list);
            });
            listModule.listListeners();
            cardModule.getCards();
        } catch (err) {
            console.log(err);
        }
    },

    makeList(list) {
        // console.log(list);
        const listTemplate = document.querySelector('.listTemplate').content.querySelector('.list');
        const newList = listTemplate.cloneNode(true);
        newList.setAttribute("id", list.id);
        const listTitle = newList.childNodes[1].childNodes[1];
        listTitle.textContent = list.name;
        listModule.displayListInDOM(newList);
    },

    displayListInDOM(list) {
        // console.log(list);
        const listBx = document.querySelector('.listBx');
        listBx.append(list);
    },

    listListeners(){
        const createListForm = document.querySelector('.createListForm');
        createListForm.addEventListener('submit', listModule.createListHandler);

        const deleteBtns = document.querySelectorAll('.list__deleteBtn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', listModule.deleteAlert);
        });
    },

    setSortable(list) {
        // console.log(list);
        Sortable.create(list, {
            group: 'lists',
            swapThreshold: 1,
            animation: 150,
        });
    },

    async createListHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        // console.log(dataObject);

        try {
            const result = await fetch(listModule.url, {
                method: 'POST',
                body: formData,
            });
            const data = await result.json();
            console.log(data);
            utils.hideCreateListModal();
            listModule.displayListInDOM(data);
            // utils.resetList();
        } catch (err) {
            console.log(err);
        }
    },

    deleteAlert(e) {
        const btn = e.target;
        const list = btn.parentNode.parentNode.parentNode;
        const listId = Number(list.getAttribute("id"));
        console.log(listId);
        const alert = confirm('Voulez-vous vraiment supprimer cette liste?');
        if (alert) {
            listModule.deleteList(listId, list);
        };
    },

    async deleteList(listId, list) {
        try {
            console.log(listModule.url + listId);
            const result = await fetch(listModule.url + listId, {
                method: 'DELETE',
            });
            const data = await result.json();
            console.log(data);
            list.remove();
        } catch (err) {
            console.log(err);
        }
    }

};

export default listModule;