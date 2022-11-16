import express from 'express';
import {Prisma, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.status(201).send("Raiz.")
})

app.get('/users', async (req, res) => {
  await prisma.$connect()
  const users = await prisma.user.findMany();

  res.status(200).json({ users })
})

app.post('/users', async (req, res) => {
  await prisma.$connect()
  const { email, name, matricula } = req.body;
  await prisma.user.create({
    data: {
      email,
      name,
      matricula,
    }
  })

  res.status(201).json({ message: "user created."})
})

app.post('/jobs', async (req, res) => {
  await prisma.$connect()
  const { date, turno, criouId, aceitouId } = req.body;
  let newJob: Prisma.JobCreateInput;

  newJob = {
    date,
    turno,
    criouId,
    aceitouId
  }
  await prisma.job.create({
    data: newJob
  })

  res.status(201).json({ newJob })
})

app.listen(3030, () => { console.log('Servidor ATIVADO!')});