import { Request, Response } from 'express';
import { Card, Status } from '../../models';

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

    async updateStatus(req: Request, res: Response){
        const data = req.body;
        console.log(data);
    },

    async deleteStatus(){

    },
};

export default statusController;