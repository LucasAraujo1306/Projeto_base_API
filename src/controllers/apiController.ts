import { Request, Response } from "express";

import { Phrase } from '../models/PhraseModel'

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

export const createPhases = async (req: Request, res: Response) => {
    let { author, txt } = req.body

    const newPhrase = await Phrase.create({ author, txt });
    res.status(200).json({ id: newPhrase.id, author, txt })
}