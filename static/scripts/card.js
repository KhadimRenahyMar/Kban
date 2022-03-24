
export const card = {
    url: null,
    On(){
        card.getList();
        console.log('coucou')
    },
    
    setUrl(baseUrl){
        card.url = baseUrl + "cards";
        console.log(card.url);
    },

    getList(){

        console.log('coucou2')
        const lists = document.querySelectorAll('.list');
        lists.forEach(list => {
            let id = Number(list.getAttribute('id'));
            let cards = card.getCardsFromList(id);
            card.displayCards(list, cards);
            console.log(cards);
        });
    },

    async getCardsFromList(listId){
        try{
            console.log(listId);
            const result = await fetch(card.url);
            const cards = await result.json();
        }
        catch(err){
            console.log(err);
        }
    },
    
    displayCards(list, cards){
        const cardTemplate = document.querySelector('.card');
        cards.forEach(card => {
            cardTemplate.cloneNode();
            list.append(cardTemplate);
        });
        list.append(cards);
    }
};

export default card;
module.exports = card;