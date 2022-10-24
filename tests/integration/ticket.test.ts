import app, { init } from '@/app';
import faker from '@faker-js/faker';
import httpStatus from 'http-status';
import supertest from 'supertest';
import { createHotel, createUser, ticketFactory } from '../factories';
import { cleanDb, generateValidToken } from '../helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

describe('Testes da rota POST /tickets', () => {
  it('deve responder com status 401 quando não é enviado um token', async () => {
    const server = supertest(app);
    const ticket = { type: 'online' };
    const token = '';

    const response = await server.post('/tickets').set('Authorization', `Bearer ${token}`).send(ticket);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('deve responder com status 401 quando é enviado um token inválido', async () => {
    const server = supertest(app);
    const ticket = { type: 'online' };
    const token = 'a-invalid-token';

    const response = await server.post('/tickets').set('Authorization', `Bearer ${token}`).send(ticket);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('deve responder com status 400 quando é enviado body inválido', async () => {
    const server = supertest(app);
    const ticket = { type: 'invalid-type' };
    const token = await generateValidToken();

    const response = await server.post('/tickets').set('Authorization', `Bearer ${token}`).send(ticket);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('deve responder com status 409 quando o usuário já possui um ticket cadastrado', async () => {
    const server = supertest(app);
    const user = await createUser();
    const token = await generateValidToken(user);
    const registeredTicket = await ticketFactory(user.id);
    const ticket = { type: registeredTicket.type };

    const response = await server.post('/tickets').set('Authorization', `Bearer ${token}`).send(ticket);

    expect(response.status).toBe(httpStatus.CONFLICT);
  });

  it('deve responder com status 201 quando um ticket é cadastrado com sucesso', async () => {
    const server = supertest(app);
    const token = await generateValidToken();
    const ticket = { type: 'inperson' };

    const response = await server.post('/tickets').set('Authorization', `Bearer ${token}`).send(ticket);

    expect(response.status).toBe(httpStatus.CREATED);
  });
});
