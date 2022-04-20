import { Request, Response } from 'express';
import { Status } from '../models';

const mainController = {
    home: async (req: Request, res: Response)=>{
        const statusList: Status[] = await Status.findAll();
        res.render('home', {
            statusList,
        });
    },
};

export default mainController;