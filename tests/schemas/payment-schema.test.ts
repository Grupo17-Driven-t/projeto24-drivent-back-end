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

  it('When doesn`t exist cards`s number', () => {
    const withOutNumber: CreditCard = creditCard;
    delete withOutNumber.number;

    const { error } = creditCardSchema.validate(withOutNumber);

    expect(error).toBeDefined();
  });

  it('When card`s name is wrong', () => {
    const randomWord = faker.lorem.word(35);
    const wrongNameCard: CreditCard = { ...creditCard, name: randomWord };

    const { error } = creditCardSchema.validate(wrongNameCard);

    expect(error).toBeDefined();
  });

  it('When doesn`t exist number`s card', () => {
    const withOutName: CreditCard = creditCard;
    delete withOutName.name;

    const { error } = creditCardSchema.validate(withOutName);

    expect(error).toBeDefined();
  });
});
