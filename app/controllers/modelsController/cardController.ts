import { Request, Response } from 'express';
import { Card } from '../../models';

const cardController = {
    async getAllCards(){
        const cards = await Card.findAll();
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