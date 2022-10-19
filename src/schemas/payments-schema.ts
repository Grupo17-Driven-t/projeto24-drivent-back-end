import { creditCard } from '@/types/payments-type';
import Joi from 'joi';

export const creditCardSchema = Joi.object<creditCard>({
  number: Joi.string().required(),
  name: Joi.string()
    .pattern(/^[a-zA-Z]{4,}$/)
    .required(),
  validDate: Joi.string()
    .pattern(/^[0-9]{2}\/[0-9]{2}$/)
    .required(),
  cvc: Joi.string()
    .pattern(/^[0-9]{3}$/)
    .required(),
});
