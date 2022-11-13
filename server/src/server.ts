import express from 'express';
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const app = express();

app.get('/', (req, res) => {
  res.status(201).send("Raiz.")
})

app.get('/users', async (req, res) => {
  await prisma.$connect()
  const users = await prisma.user.findMany();

  res.status(200).json(users)
})

app.post('/users', (req, res) => {
  res.status(201).json({message: 'user created'})
})

app.listen(3030, () => { console.log('Servidor ATIVADO!')});