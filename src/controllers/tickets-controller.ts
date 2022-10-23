import { Request, Response } from 'express';
import { findAll, createTicket } from '@/services';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { Ticket } from '@prisma/client';

export async function getAllTickets(req: Request, res: Response) {
  const result = await findAll();
  return res.status(httpStatus.OK).send(result);
}

export async function registerTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { type } = req.body;

  const newTicket: Ticket = await createTicket(userId, type);

  res.status(httpStatus.CREATED).send(newTicket);
}
