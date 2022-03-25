import { Request, Response } from 'express';
import { Card } from '../../models';

const cardController = {
    async getCardsFromList(req: Request, res: Response){
        const listId = req.params.listId;
        const cards: Card[] = await Card.findAll({
            where: {
                list_id: listId,
            }}
        );
        res.json(cards);
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