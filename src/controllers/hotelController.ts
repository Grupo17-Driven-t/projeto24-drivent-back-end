import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
import hotelService from '@/services/hotelService';

async function getHotelPrice(req: AuthenticatedRequest, res: Response) {
  const hotelPrice = await hotelService.findHotelPrice();

  return res.status(httpStatus.OK).send(hotelPrice);
}

async function getHotels(req: AuthenticatedRequest, res: Response) {
  //const hotels = ;

  res.status(200).send('oiii');
}

export const hotelController = {
  getHotelPrice,
  getHotels,
};
