import { Request, Response } from 'express';

const loginController = {
    loginPage: (req: Request, res: Response)=>{
        res.render('loginPage', {
            
        });
    },
    login: (req: Request, res: Response)=>{

    }
};


export default loginController;