import { prisma } from '@/config';
import { TicketType } from '@prisma/client';

async function findAll() {
  return await prisma.ticket.findMany();
}

async function getTicketByUserId(userId: number) {
  return await prisma.ticket.findFirst({ where: { userId } });
}

async function insert(userId: number, ticketType: TicketType) {
  return await prisma.ticket.create({ data: { userId: userId, type: ticketType } });
}

const ticketRepo = {
  findAll,
  getTicketByUserId,
  insert,
};

export default ticketRepo;
