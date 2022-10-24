import { cleanDb, generateValidToken } from '../helpers';
import app, { init } from '@/app';
import httpStatus from 'http-status';
import supertest from 'supertest';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('Tests of route payment', () => {
  it('Has to return status 400, if user send a wrong request disrespecting schema', async () => {
    const creditCardData: object = {};
    const token = await generateValidToken();

    const response = await server.post('/payment/card').set('Authorization', `Bearer ${token}`).send(creditCardData);

    expect(response.statusCode).toBe(httpStatus[400]);
  });
});
