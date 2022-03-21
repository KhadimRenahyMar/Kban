import { Router } from 'express';
import mainController from './controllers/mainController';
import registerController from './controllers/registerController';
import loginController from './controllers/loginController';
import userController from './controllers/userController';

import listController from './controllers/modelsController/listController';
import cardController from './controllers/modelsController/cardController';
import statusController from './controllers/modelsController/statusController';

import userMiddleware from './middleware/userMiddleware';

const router = Router();
router.get('/', mainController.homePage);

//user
router.get('/register', registerController.registerPage);
router.get('/login', loginController.loginPage);

//CRUD
//user
router.post('/register', registerController.register);
router.post('/login', loginController.login)
router.get('/profile', userController.home);

// List
// router.get('/list/', userMiddleware, listController.getAllLists);
router.get('/list/:listId', userMiddleware, listController.getList);
router.post('/list/:listId', userMiddleware, listController.createList);
router.patch('/list/:listId', userMiddleware, listController.updateList);
router.delete('/list/:listId', userMiddleware, listController.deleteList);

// Card 
// router.get('/card/', userMiddleware, cardController.getAllCards);
router.get('/card/:cardId', userMiddleware, cardController.getCard);
router.post('/card/:cardId', userMiddleware, cardController.createCard);
router.patch('/card/:cardId', userMiddleware, cardController.updateCard);
router.delete('/card/:cardId', userMiddleware, cardController.deleteCard);

// Status
// router.get('/status/', userMiddleware, statusController.getAllStatus);
router.get('/status/:statusId', userMiddleware, statusController.getStatus);
router.post('/status/:statusId', userMiddleware, statusController.createStatus);
router.patch('/status/:statusId', userMiddleware, statusController.updateStatus);
router.delete('/status/:statusId', userMiddleware, statusController.deleteStatus);

export default router;
