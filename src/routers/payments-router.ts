import { Router } from 'express';

import { creditCardSchema } from '@/schemas/payments-schema';
import { authenticateToken, validateBody } from '@/middlewares';
import { creditCardPost } from '@/controllers/payments-controller';

const paymentsRouter: Router = Router();

paymentsRouter.all('/*', authenticateToken).post('/card', validateBody(creditCardSchema), creditCardPost);

export { paymentsRouter };
