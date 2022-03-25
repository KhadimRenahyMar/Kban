import { Request, Response } from 'express';
import { Card, List, User } from '../models';
import listController from "./modelsController/listController";
import cardController from "./modelsController/cardController";
import statusController from "./modelsController/statusController";
import { Association } from 'sequelize/types';

const userController = {
    home: async (req: Request, res: Response)=>{
        
        res.render('./userviews/home', {

        });
    },
};

export default userController;