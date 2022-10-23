import { Router } from 'express';
import { getAllTickets, registerTicket } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter.get('/', getAllTickets).post('/', authenticateToken, registerTicket);

export { ticketsRouter };
