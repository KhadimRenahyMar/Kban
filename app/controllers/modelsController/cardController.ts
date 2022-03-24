import { Request, Response } from 'express';
import { Card } from '../../models';

const cardController = {
    async getAllCards(req: Request, res: Response){
        const cards: Card[] = await Card.findAll({
            include: "status",
        });
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