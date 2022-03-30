import Sortable from 'sortablejs';
import cardModule from './card';
import utils from './utils';

const listModule = {
    url: null,

    On() {
        listModule.setSortableList()
    },

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
            listModule.listFormListeners();
            utils.updateListListener();
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
        // console.log(newList);
    },

    displayListInDOM(list) {
        const listBx = document.querySelector('.listBx');
        // console.log(list)
        listBx.append(list);
    },

    listFormListeners(){
        const createListForm = document.querySelector('.createListForm');
        createListForm.addEventListener('submit', listModule.createListHandler);

        const deleteBtns = document.querySelectorAll('.list__deleteBtn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', listModule.deleteAlert);
        });

        const updateListForm = document.querySelectorAll('.list__updateListForm');
        updateListForm.forEach(form => {
            form.addEventListener('submit', listModule.updateListHandler);
        });
    },
    
    setSortableList() {
        const listBx = document.querySelector('.listBx');
        Sortable.create(listBx, {
            group: 'lists',
            swapThreshold: 1,
            animation: 150,
        });
    },

    setSortableCards(list) {
        // console.log(list);
        Sortable.create(list, {
            group: 'cards',
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
            listModule.makeList(data);
            listModule.listFormListeners();
            utils.updateListListener();
        } catch (err) {
            console.log(err);
        }
    },

    deleteAlert(e) {
        const btn = e.target;
        const list = btn.parentNode.parentNode.parentNode;
        const listId = Number(list.getAttribute("id"));
        const alert = confirm('Voulez-vous vraiment supprimer cette liste?');
        if (alert) {
            listModule.deleteList(listId, list);
        };
    },

    async deleteList(listId, list) {
        try {
            // console.log(listModule.url + listId);
            const result = await fetch(listModule.url + listId, {
                method: 'DELETE',
            });
            const data = await result.json();
            // console.log(data);
            list.remove();
        } catch (err) {
            console.log(err);
        }
    },

    async updateListHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        // console.log(dataObject);

        const { name } = dataObject;
        const list = e.target.parentNode.parentNode;
        const listId = Number(list.getAttribute("id"));
        console.log(listId);
        try{
            // console.log(listModule.url+listId)
            const result = await fetch(listModule.url+listId, {
                method: 'PATCH',
                body: formData,
            });
            const data = await result.json();
            // console.log(data);
            utils.hideUpdateListModal(e.target, name);
        }
        catch(err){
            console.log(err);
        }
    },

};

export default listModule;