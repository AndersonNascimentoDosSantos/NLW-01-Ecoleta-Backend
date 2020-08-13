import express from  'express';
import PointController from './controllers/pointsControler';
import ItemsController from './controllers/itemsController';
const routes = express.Router();
const pointsControler = new PointController();  
const itemsControler = new ItemsController(); 

routes.get('/itens',itemsControler.index);

routes.post('/points',pointsControler.create);
routes.get('/points/:id',pointsControler.show);
routes.get('/points',pointsControler.index);
export default routes;