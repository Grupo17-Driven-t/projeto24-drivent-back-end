import { CreditCard } from '@/types/payments-type';
import Joi from 'joi';

export const creditCardSchema = Joi.object<CreditCard>({
  number: Joi.string()
    .pattern(/^[0-9]{16}$/)
    .required()
    .label('Has to be exactly 16 numbers'),
  name: Joi.string()
    .pattern(/^[a-zA-Z]{4,30}$/)
    .required()
    .label('Insert your first name and choose one surname'),
  validDate: Joi.string()
    .pattern(/^[0-9]{2}\/[0-9]{2}$/)
    .required()
    .label('Has to be in this format mm/yy, mm -> month, yy -> year'),
  cvc: Joi.string()
    .pattern(/^[0-9]{3}$/)
    .required()
    .label('Has to be exactly 3 numbers'),
});
