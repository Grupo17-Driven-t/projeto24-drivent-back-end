import { Router } from 'express';

import { creditCardSchema } from '@/schemas/payments-schema';
import { validateBody } from '@/middlewares';
import { creditCardPost } from '@/controllers/payments-controller';

const paymentsRouter = Router();

paymentsRouter.post('/card', validateBody(creditCardSchema), creditCardPost);

export { paymentsRouter };
