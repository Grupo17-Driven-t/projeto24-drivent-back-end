import { notFoundError } from '@/errors';
import ticketRepo from '@/repositories/tickets-repository';

export async function findAll() {
  const allTickets = await ticketRepo.findAll();
  if (!allTickets) throw notFoundError();

  return allTickets;
}
