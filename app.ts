import { app } from "./server";
import { Request, Response } from 'express';

let saldo = 0;

app.get('/listar', (req: Request, res: Response) => {
  res.send(`Saldo atual: R$ ${saldo}`);
});

app.post('/depositar', (req, res) => {
  const { valor } = req.body;
  saldo += valor;
  res.send(`Depósito realizado. Novo saldo: R$ ${saldo}`);
});

app.post('/sacar', (req, res) => {
  const { valor } = req.body;
  if (valor <= saldo) {
    saldo -= valor;
    res.send(`Saque realizado. Novo saldo: R$ ${saldo}`);
  } else {
    res.send('Saldo insuficiente');
  }
});