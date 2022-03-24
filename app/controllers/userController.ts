import { Request, Response } from 'express';
import { Card, List, User } from '../models';
import listController from "./modelsController/listController";
import cardController from "./modelsController/cardController";
import statusController from "./modelsController/statusController";
import { Association } from 'sequelize/types';

const userController = {
    home: async (req: Request, res: Response)=>{
        // const userId: number = Number(req.params.id);
        // const user = await User.findByPk(userId);
        const lists = await listController.getAllLists();
        const status = await statusController.getAllStatus();
        res.render('./userviews/home', {
            lists: lists,
            status,
        });
    },
};

export default userController;