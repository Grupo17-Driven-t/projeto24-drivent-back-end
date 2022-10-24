import { CreditCard } from '@/types/payments-type';
import faker from '@faker-js/faker';

function numbers(qntd: number) {
  const randomNumbers: string = faker.random.numeric(qntd);
  return randomNumbers;
}

function month() {
  const randomMounth: string = faker.helpers.arrayElement([
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]);

  return randomMounth;
}

export default function __createCreditCard() {
  const brandIdentify: string = faker.helpers.arrayElement(['49', '51', '36', '37']);
  const date: string = faker.date.future(9).toDateString();

  const creditCard: CreditCard = {
    number: `${brandIdentify}${numbers(2)} ${numbers(4)} ${numbers(4)} ${numbers(4)}`,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    validDate: `${month()}/${date.substring(13, 16)}`,
    cvc: faker.random.numeric(3),
  };

  return creditCard;
}
