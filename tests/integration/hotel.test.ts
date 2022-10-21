import app, { init } from '@/app';
import faker from '@faker-js/faker';
import httpStatus from 'http-status';
import supertest from 'supertest';
import { createHotel } from '../factories';
import { cleanDb, generateValidToken } from '../helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

describe('Testes da rota de /hotels', () => {
  it('Deve retornar status 401 quando não é enviado um token', async () => {
    const hotel = await createHotel();
    const server = supertest(app);

    const response = await server.get('/hotels/price').set('Authorization', `Bearer `).send({});

    expect(response.statusCode).toBe(httpStatus.UNAUTHORIZED);
  });

  it('Deve retornar status 401 quando enviado um token inválido', async () => {
    const token = faker.lorem.word();
    const hotel = await createHotel();
    const server = supertest(app);

    const response = await server.get('/hotels/price').set('Authorization', `Bearer ${token}`).send({});

    expect(response.statusCode).toBe(httpStatus.UNAUTHORIZED);
  });

  it('Deve retornar status 200 e um body null se não há um hotel cadastrado', async () => {
    await cleanDb();
    const token = await generateValidToken();
    const hotel = {};
    const server = supertest(app);

    const response = await server.get('/hotels/price').set('Authorization', `Bearer ${token}`).send({});

    expect(response.statusCode).toBe(httpStatus.OK);
    expect(response.body).toEqual({});
  });

  it('Deve retornar status 200 e um preco de hotel se há um hotel cadastrado', async () => {
    await cleanDb();
    const token = await generateValidToken();
    const hotel = await createHotel();
    const server = supertest(app);

    const response = await server.get('/hotels/price').set('Authorization', `Bearer ${token}`).send({});

    expect(response.statusCode).toBe(httpStatus.OK);
    expect(response.body).toEqual({ price: hotel.price });
  });
});
