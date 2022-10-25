import { authenticateToken } from '@/middlewares';
import { Router } from 'express';
// eslint-disable-next-line import/namespace
import { hotelController } from '@/controllers/hotelController';

const hotelRouter: Router = Router();

hotelRouter.all('/*', authenticateToken);
hotelRouter.get('/price', hotelController.getHotelPrice);
hotelRouter.get('/', hotelController.getHotels);

export { hotelRouter };
