import { prisma } from '@/config';
import faker from '@faker-js/faker';

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.company.companyName(),
      price: Math.floor(faker.datatype.number()),
      qtdAccomodations: Math.floor(faker.datatype.number({ min: 10 })),
    },
  });
}
