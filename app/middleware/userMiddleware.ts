import { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import {List, Card} from '../models';

declare module 'express-session' {
    export interface SessionData {
        user: { [key: string]: any}
        lists: List[];
        cards: Card[];
    }
}
const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // petite etape intermediare
    // on injecte l'utilisateur connecté dans les locals pour pouvoir l'utiliser dans les templates EJS
    if(req.session.user) {
        res.locals.user = req.session.user;
    } else {
        res.locals.user = false;
    }

    next();
}
export default userMiddleware;