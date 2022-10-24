import { cleanDb, generateValidToken } from '../helpers';
import app, { init } from '@/app';
import httpStatus from 'http-status';
import supertest from 'supertest';
import { CreditCard } from '@/types/payments-type';
import __createCreditCard from '../factories/payment-factory';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('POST /payment/card', () => {
  it('Has to return 400, if user send a wrong request disrespecting schema', async () => {
    const creditCardData: object = {};
    const token = await generateValidToken();

    const response = await server.post('/payment/card').set('Authorization', `Bearer ${token}`).send(creditCardData);

    expect(response.statusCode).toBe(httpStatus.BAD_REQUEST);
  });

  it('Hast to return 401, if user send a request without Authorization', async () => {
    const creditCardData: CreditCard = __createCreditCard();

    const response = await server.post('/payment/card').send(creditCardData);

    expect(response.statusCode).toBe(httpStatus.UNAUTHORIZED);
  });

  it('Hast to return 200, if user send an corretly request', async () => {
    const creditCardData: CreditCard = __createCreditCard();
    const token = await generateValidToken();

    const response = await server.post('/payment/card').set('Authorization', `Bearer ${token}`).send(creditCardData);

    expect(response.statusCode).toBe(httpStatus.OK);
  });
});
