import { createTicket } from '@/services';
import ticketRepo from '@/repositories/tickets-repository';
import { registeredTicketFactory } from '../factories';

describe('Testes do service de tickets', () => {
  it('deve responder com um erro de conflito quando o usuário já tem um ticket cadastado', async () => {
    const ticket = await registeredTicketFactory();
    const userId = ticket.userId;

    jest.spyOn(ticketRepo, 'getTicketByUserId').mockResolvedValue(ticket);

    const result = createTicket(userId, ticket.type);

    expect(result).rejects.toEqual({ name: 'ConflictError', message: 'O usuário já possui um ingresso' });
  });

  it('deve chamar a função de cadastro em caso de sucesso', async () => {
    const ticket = await registeredTicketFactory();
    const userId = ticket.userId;

    jest.spyOn(ticketRepo, 'getTicketByUserId').mockResolvedValue(null);
    jest.spyOn(ticketRepo, 'insert').mockReturnValue(null);

    await createTicket(userId, ticket.type);

    expect(ticketRepo.insert).toBeCalled();
  });
});
