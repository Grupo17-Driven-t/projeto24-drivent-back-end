import { creditCard } from "@/types/payments-type";
import { Request, Response } from "express";

export async function creditCardPayment(req: Request, res: Response) { 
    const creditCard: creditCard = req.body;

    res.sendStatus(200);
}