import { CreditCard } from '@/types/payments-type';
import __createCreditCard from '../factories/payment-factory';
import faker from '@faker-js/faker';
import { creditCardSchema } from '@/schemas/payments-schema';

describe('crediCardSchema', () => {
  const creditCard: CreditCard = __createCreditCard();
  it('When card`s number is wrong', () => {
    const randomNumber = faker.random.numeric(16);
    const wrongNumberCard: CreditCard = { ...creditCard, number: randomNumber };

    const { error } = creditCardSchema.validate(wrongNumberCard);

    expect(error).toBeDefined();
  });

  it('When doesn`t exist number`s card', () => {
    const withOutNumber: CreditCard = creditCard;
    delete withOutNumber.number;

    const { error } = creditCardSchema.validate(withOutNumber);

    expect(error).toBeDefined();
  });
});
