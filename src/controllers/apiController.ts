import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const random = (req: Request, res: Response) => {
    const numberRandom: number = Math.floor(Math.random() * 100000);
    res.json({ numberRandom });
}

export const nome = (req: Request, res: Response) => {
    const nome: string = req.params.nome;
    res.json({ nome });
}