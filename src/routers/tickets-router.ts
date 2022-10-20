import { Router } from 'express';
import { getAllTickets } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.get('/', getAllTickets);

export { ticketsRouter };
