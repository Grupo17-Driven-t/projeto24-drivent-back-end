import { CreditCard } from '@/types/payments-type';
import { Request, Response } from 'express';

export async function creditCardPost(req: Request, res: Response) {
  const creditCard: CreditCard = req.body;
  // eslint-disable-next-line no-console
  console.log(creditCard);

  res.sendStatus(200);
}
