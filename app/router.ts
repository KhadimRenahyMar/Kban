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
router.get('/lists',  listController.getAllLists);
router.get('/lists',  listController.getAllLists);
router.post('/lists',  listController.createList);
router.patch('/lists/:listId',  listController.updateList);
router.delete('/lists/:listId',  listController.deleteList);

// Card 
// router.get('/cards',  cardController.getCardsFromList);
router.get('/cards',  cardController.getCard);
router.get('/cards/:listId',  cardController.getCardsFromList);
router.post('/cards/:cardId',  cardController.createCard);
router.patch('/cards/:cardId',  cardController.updateCard);
router.delete('/cards/:cardId',  cardController.deleteCard);

// Status
// router.get('/status/',  statusController.getAllStatus);
router.get('/status',  statusController.getAllStatus);

router.get('/status',  statusController.getStatus);
router.post('/status',  statusController.createStatus);
router.patch('/status/:statusId',  statusController.updateStatus);
router.delete('/status/:statusId',  statusController.deleteStatus);

export default router;
