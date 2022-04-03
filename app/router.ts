import { Router } from 'express';
import mainController from './controllers/mainController';

import listController from './controllers/modelsController/listController';
import cardController from './controllers/modelsController/cardController';
import statusController from './controllers/modelsController/statusController';

const router = Router();
router.get('/', mainController.home);

//CRUD

// List
router.get('/lists',  listController.getAllLists);
router.get('/lists/:listId',  listController.getAllLists);
router.post('/lists',  listController.createList);
router.patch('/lists/:listId',  listController.updateList);
router.delete('/lists/:listId',  listController.deleteList);

// Card 
// router.get('/cards',  cardController.getCardsFromList);
router.get('/cards',  cardController.getCard);
router.get('/cards/:listId',  cardController.getCardsFromList);
router.post('/cards/:listId',  cardController.createCard);
router.patch('/cards/:cardId',  cardController.updateCard);
router.delete('/cards/:cardId',  cardController.deleteCard);

// Status
// router.get('/status/',  statusController.getAllStatus);
router.get('/status',  statusController.getAllStatus);

router.get('/status',  statusController.getStatus);
router.patch('/status/:statusId',  statusController.updateStatus);
router.delete('/status/:statusId',  statusController.deleteStatus);

export default router;
