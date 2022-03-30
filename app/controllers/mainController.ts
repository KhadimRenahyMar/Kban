import { Request, Response } from 'express';
import { Card, List, Status } from '../models';
import listController from "./modelsController/listController";
import cardController from "./modelsController/cardController";
import statusController from "./modelsController/statusController";
import { Association } from 'sequelize/types';

const mainController = {
    home: async (req: Request, res: Response)=>{
        const statusList: Status[] = await Status.findAll();
        res.render('./userviews/home', {
            statusList,
        });
    },
};

export default mainController;