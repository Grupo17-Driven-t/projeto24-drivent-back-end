import { prisma } from '@/config';

async function findAll() {
  return await prisma.ticket.findMany();
}

const ticketRepo = {
  findAll,
};

export default ticketRepo;
