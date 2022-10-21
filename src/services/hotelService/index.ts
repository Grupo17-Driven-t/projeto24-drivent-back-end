import hotelRepository from '../../repositories/hotel-repository/index';

async function findHotelPrice() {
  const hotel = await hotelRepository.getHotelPrice();

  return hotel;
}

const hotelService = {
  findHotelPrice,
};

export default hotelService;
