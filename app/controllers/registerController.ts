import { Request, Response } from 'express';

const registerController = {
    registerPage: (req: Request, res: Response)=>{
        res.render('registerPage', {

        })
    },
    register: (req: Request, res: Response)=>{
        
    }
};

export default registerController;