import express, { Router, Request, Response } from 'express';

export const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, World!'})
})

app.use(route);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
