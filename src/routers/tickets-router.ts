import { Router } from 'express';
import { getAllTickets, registerTicket } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter.get('/', getAllTickets).post('/', authenticateToken, validateBody(ticketSchema), registerTicket);

export { ticketsRouter };
