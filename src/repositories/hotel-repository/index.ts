import { prisma } from '@/config/index';

async function getHotelPrice() {
  const hotelPrice = await prisma.hotel.findFirst({
    select: {
      price: true,
    },
  });

  return hotelPrice;
}

const hotelRepository = {
  getHotelPrice,
};

export default hotelRepository;
