import { Request, Response } from 'express';
import { findAll } from '@/services';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';

export async function getAllTickets(req: Request, res: Response) {
  const result = await findAll();
  return res.status(httpStatus.OK).send(result);
}

export async function registerTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  res.sendStatus(httpStatus.NOT_IMPLEMENTED);
}
