import { Card } from '../../models';

const cardController = {
    async getAllCards(){
        const cards: Card[] = await Card.findAll({
            include: "status",
        });
        return cards;
    },

    async getCard(cardId: number){
        const card = await Card.findByPk(cardId);
        return card;
    },

    async createCard(){

    },

    async updateCard(){

    },

    async deleteCard(){

    },
};

export default cardController;