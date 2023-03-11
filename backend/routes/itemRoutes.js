
import express from 'express';
const itemRoutes = express.Router();

import { authenticateUser } from '../middleware/authentication.js';

import{
  //itemFetch,
  //itemUpdate,
  itemAdd,
  allItemFetch,

} from '../controllers/itemController.js';

itemRoutes.post("/",itemAdd)
itemRoutes.get("/all/:id", allItemFetch);
//itemRoutes.put('/:id', itemUpdate);

export default itemRoutes;



















