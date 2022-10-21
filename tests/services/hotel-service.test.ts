import hotelService from '@/services/hotelService';
import hotelRepository from '@/repositories/hotel-repository';
import faker from '@faker-js/faker';

describe('Testes dos services de hotel', () => {
  it('deve retornar um null quando não há um hotel cadastrado', async () => {
    jest.spyOn(hotelRepository, 'getHotelPrice').mockResolvedValue(null);

    const result = await hotelService.findHotelPrice();

    expect(result).toBeNull();
  });

  it('deve retornar um objeto com price quando há um hotel cadastrado', async () => {
    const hotelPrice = { price: Number(faker.datatype.number()) };

    // eslint-disable-next-line prettier/prettier
    jest
      .spyOn(hotelRepository, 'getHotelPrice')
      .mockResolvedValue(hotelPrice);

    const result = await hotelService.findHotelPrice();

    expect(result).toEqual(hotelPrice);
  });
});
