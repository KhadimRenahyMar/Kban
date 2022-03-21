import { Request, Response } from 'express';
import { Status } from '../../models';

const statusController = {
    async getAllStatus(req: Request, res: Response){
        const status: Status[] = await Status.findAll();
        console.log(status);
        return status;
    },

    getStatus: async (req: Request, res: Response)=>{
        const statusId: number = Number(req.params.statusId);
        const status: Status = await Status.findByPk(statusId);
        return status;
    },

    createStatus: async (req: Request, res: Response)=>{
        
    },

    updateStatus: async (req: Request, res: Response)=>{

    },

    deleteStatus: async (req: Request, res: Response)=>{

    },
};

export default statusController;