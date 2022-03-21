import { Request, Response } from "express"; 

const mainController = {
    homePage: async (req: Request, res: Response)=>{
        res.render('homepage', {

        });
    },
    

};

export default mainController;