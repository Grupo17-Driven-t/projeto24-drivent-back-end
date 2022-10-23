import { conflictError, notFoundError } from '@/errors';
import ticketRepo from '@/repositories/tickets-repository';
import { Ticket, TicketType } from '@prisma/client';

export async function findAll() {
  const allTickets = await ticketRepo.findAll();
  if (!allTickets) throw notFoundError();

  return allTickets;
}

async function userAlreadyHasTicket(userId: number) {
  const ticket: Ticket | null = await ticketRepo.getTicketByUserId(userId);

  if (ticket !== null) throw conflictError('O usuário já possui um ingresso');
}

export async function createTicket(userId: number, ticketType: TicketType) {
  await userAlreadyHasTicket(userId);

  const newTicket = await ticketRepo.insert(userId, ticketType);

  return newTicket;
}
