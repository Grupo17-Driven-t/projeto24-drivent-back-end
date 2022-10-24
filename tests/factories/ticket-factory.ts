import { prisma } from "@/config";
import faker from "@faker-js/faker";
import { TicketType } from "@prisma/client";

export async function registeredTicketFactory() {
  const ticketTypes: TicketType[] = ['online', 'inperson'];
  const type = ticketTypes[Math.floor(faker.datatype.number({ min: 0, max: ticketTypes.length - 1 }))];

  return {
    id: Math.floor(faker.datatype.number()),
    type,
    userId: Math.floor(faker.datatype.number()),
    isPaid: faker.datatype.boolean(),
  };
}

export async function ticketFactory(userId: number) {
  const types: TicketType[] = ['online', 'inperson'];
  const type = types[Math.floor(faker.datatype.number({ min: 0, max: types.length - 1 }))];

  return await prisma.ticket.create({ data: { userId, type } });
}
