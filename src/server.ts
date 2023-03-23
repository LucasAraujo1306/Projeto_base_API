import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRound from './routes/api';

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use('/api', apiRound)



server.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Page Not Found' });
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});