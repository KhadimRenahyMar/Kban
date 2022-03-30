import { Request, Response } from 'express';
import { Card } from '../../models';

const cardController = {
    async getCardsFromList(req: Request, res: Response) {
        const listId = req.params.listId;
        const cards: Card[] = await Card.findAll({
            where: {
                list_id: listId,
            }
        }
        );
        res.json(cards);
        return cards;
    },

    async getCard(cardId: number) {
        const card = await Card.findByPk(cardId);
        return card;
    },

    async createCard(req: Request, res: Response) {
        try {
            const listId: number = Number(req.params.listId);
            const card = req.body;
            if (card) {
                const newCard = await Card.create({
                    title: card.title,
                    color: card.color,
                    status_id: card.status,
                    list_id: listId,
                });
                res.json(newCard);
            }
        }
        catch (err) {
            console.log(err);
        }
    },

    async updateCard() {

    },

    async deleteCard(req: Request, res: Response) {
        try {
            const cardId = Number(req.params.cardId);
            console.log(cardId);
            const deleteList = await Card.destroy({
                where: {
                    id: cardId,
                }
            });
            res.json('dead');
        } catch (error) {
            console.log(error);
        }
    },
};

export default cardController;