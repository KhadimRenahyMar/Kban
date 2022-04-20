import { Request, Response } from 'express';
import { Card, Status } from '../../models';

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
                    position: card.position,
                    status_id: card.status_id,
                    list_id: listId,
                });
                // console.log(newCard);
                const getCard = await Card.findByPk(newCard.id, {
                    include: [{
                        association: 'status',
                    }]
                });
                // console.log(getCard);
                res.json(getCard);
            }
        }
        catch (err) {
            console.log(err);
        }
    },

    async updateCard(req: Request, res: Response) {
        try {
            console.log('update');
            const data = req.body;
            console.log(data);
            const card = await Card.findByPk(data.cardId, {
                include: [{
                    association: 'status',
                }]
            });
            // console.log(card);
            if(!card){
                res.status(404);
            }
            else{
                if(data.statusId){
                    const status = await Status.findByPk(data.statusId);
                    card.status_id = data.statusId;
                    card.status = status;
                    await card.save();
                    res.json(card.status);
                }

                if(data.title){
                    card.title = data.title;
                    await card.save();
                    res.json(card.title);
                }

                if(data.list_id){
                    console.log(card.list_id);
                    card.list_id = data.list_id;
                    await card.save();
                    res.json(card.list_id);
                }
            }
        } catch (error) {
            console.log(error);
        }
        
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