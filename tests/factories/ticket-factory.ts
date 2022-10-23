import faker from "@faker-js/faker";
import { TicketType } from "@prisma/client";

export async function registeredTicketFactory() {
  const ticketTypes: TicketType[] = ['online', 'inperson'];
  const type = ticketTypes[Math.floor(faker.datatype.number({ min: 0, max: ticketTypes.length }))];

  return {
    id: Math.floor(faker.datatype.number()),
    type,
    userId: Math.floor(faker.datatype.number()),
    isPaid: faker.datatype.boolean(),
  };
}
