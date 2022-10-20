import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';

async function getHotelPrice(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  return res.sendStatus(503);
}

export const hotelController = {
  getHotelPrice,
};
