import {Card, List, Status} from '../../models';

const listController = {
    async getAllLists(){
        const lists: List[] = await List.findAll({
            include: [{
                model: Card,
                as: "cards",
                // include: [
                //     "status",
                // ]
            }],
        });
        return lists;
    },

    async getList(listId: number){
        const list: List = await List.findByPk(listId);
        return list;
    },

    async createList(){

    },

    async updateList(){

    },

    async deleteList(){

    },
};

export default listController;