import joi from "joi";

export const creditCardSchema = joi.object({
    number: joi.string().pattern(/^[0-9]{16}$/).required(),
    name: joi.string().pattern(/^[a-zA-Z]{4,}$/).required(),
    validDate: joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
    cvc: joi.string().pattern(/^[0-9]{3}$/).required()
});
