import express from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.status(201).send("Raiz.")
})

app.get('/users', async (req, res) => {
  await prisma.$connect()
  const users = await prisma.user.findMany();

  res.status(200).json({cadastrados: users})
})

app.post('/users', async (req, res) => {
  await prisma.$connect()
  const { email, nome, matricula } = req.body;
  await prisma.user.create({
    data: {
      email,
      nome,
      matricula,
    }
  })

  res.status(201).json({message: 'user created'})
})



app.listen(3030, () => { console.log('Servidor ATIVADO!')});