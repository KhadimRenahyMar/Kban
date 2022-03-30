import { Request, Response } from 'express';
import { Status } from '../../models';

const statusController = {
    async getAllStatus(req: Request, res: Response){
        const status: Status[] = await Status.findAll();
        res.json(status);
        return status;
    },

    async getStatus(statusId: number){
        const status: Status = await Status.findByPk(statusId);
        return status;
    },

    async createStatus(){
        
    },

    async updateStatus(){

    },

    async deleteStatus(){

    },
};

export default statusController;