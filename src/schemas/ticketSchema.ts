import joi from 'joi';

export const ticketSchema = joi.object({ type: joi.string().equal('online', 'inperson').required() });
