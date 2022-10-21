import { CreditCard } from '@/types/payments-type';
import faker from '@faker-js/faker';

function numbers(qntd: number) {
  const randomNumbers: string = faker.random.numeric(qntd);
  return randomNumbers;
}

export default function createCreditCard() {
  const brandIdentify: string = faker.helpers.arrayElement(['49', '51', '36', '37']);
  const date: string = faker.date.future(5).toDateString();

  const creditCard: CreditCard = {
    number: `${brandIdentify}${numbers(2)} ${numbers(4)} ${numbers(4)} ${numbers(4)}`,
    name: faker.name.firstName() + faker.name.lastName(),
    validDate: `${date.substring(6, 8)}/${date.substring(3, 5)}`,
    cvc: faker.random.numeric(3),
  };
}
