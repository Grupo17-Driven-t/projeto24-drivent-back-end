import { CreditCard } from '@/types/payments-type';
import __createCreditCard from '../factories/payment-factory';
import faker from '@faker-js/faker';
import { creditCardSchema } from '@/schemas/payments-schema';

describe('crediCardSchema', () => {
  const creditCard: CreditCard = __createCreditCard();

  it('When card`s number is wrong', () => {
    const randomNumber: string = faker.random.numeric(16);
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
    const randomWord: string = faker.lorem.word(35);
    const wrongNameCard: CreditCard = { ...creditCard, name: randomWord };

    const { error } = creditCardSchema.validate(wrongNameCard);

    expect(error).toBeDefined();
  });

  it('When doesn`t exist name`s card', () => {
    const withOutName: CreditCard = creditCard;
    delete withOutName.name;

    const { error } = creditCardSchema.validate(withOutName);

    expect(error).toBeDefined();
  });

  it('When expiry date is wrong', () => {
    const randomDate: string = faker.date.future(10).toDateString();
    const wrongExpiryCard: CreditCard = { ...creditCard, validDate: randomDate };

    const { error } = creditCardSchema.validate(wrongExpiryCard);

    expect(error).toBeDefined();
  });

  it('When doesn`t exist card`s expiry date', () => {
    const withOutExpiryDate: CreditCard = creditCard;
    delete withOutExpiryDate.validDate;

    const { error } = creditCardSchema.validate(withOutExpiryDate);

    expect(error).toBeDefined();
  });

  it('When card`s cvc is wrong', () => {
    const randomNumber: string = faker.random.numeric(4);
    const wrongCvcCard: CreditCard = { ...creditCard, cvc: randomNumber };

    const { error } = creditCardSchema.validate(wrongCvcCard);

    expect(error).toBeDefined();
  });

  it('When doesn`t exist card`s cvc', () => {
    const withOutCvc: CreditCard = creditCard;
    delete withOutCvc.cvc;

    const { error } = creditCardSchema.validate(withOutCvc);

    expect(error).toBeDefined();
  });
});
