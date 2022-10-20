import { Request, Response } from 'express';
import { findAll } from '@/services';
import httpStatus from 'http-status';

export async function getAllTickets(req: Request, res: Response) {
  const result = await findAll();
  return res.status(httpStatus.OK).send(result);
}
