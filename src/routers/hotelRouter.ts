import { authenticateToken } from '@/middlewares';
import { Router } from 'express';
import { hotelController } from '@/controllers/hotelController';

const hotelRouter:Router = Router();

hotelRouter
  .all('/*', authenticateToken)
  .get('/price', hotelController.getHotelPrice);

export { hotelRouter };