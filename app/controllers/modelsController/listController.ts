import { Request, Response } from 'express';
import { Card, List, Status } from '../../models';

const listController = {
    async getAllLists(req: Request, res: Response) {
        const lists: List[] = await List.findAll({
            include: [{
                association: 'cards',
                include: [{
                    association: 'status',
                }]
            }],
            order: [
                ['position', 'ASC'],
                ['cards', 'position', 'ASC']
            ]
        });
        // console.log(lists[0].cards[0].status);
        res.json(lists);
    },

    async getList(req: Request, res: Response) {
        try {
            const listId: number = Number(req.params.listId);
            const list: List = await List.findByPk(listId);
            return list;
        } catch (error) {
            console.log(error);
        }
    },

    async createList(req: Request, res: Response) {
        try {
            const { name, position, color } = req.body;
            if (!name) {
                console.log(name);
            }
            else {
                const newList = await List.create({
                    name,
                    color,
                    position,
                });
                res.json(newList);
            }
        }
        catch(err){
            console.log(err);
        }
    },

    async updateList(req: Request, res: Response) {
        const listId = Number(req.params.listId);
        const list = await List.findByPk(listId);
        if(list){
            const update = req.body;
            if(update.name){
                list.name = update.name;
            }
            await list.save();
            res.json(list);
        }
    },

    async deleteList(req: Request, res: Response) {
        const listId = Number(req.params.listId);
        console.log(listId);
        const deleteList = await List.destroy({
            where: {
                id: listId,
            }
        });
        res.json('dead');
    },
};

export default listController;