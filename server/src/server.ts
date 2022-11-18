import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json())


//lista todos users
app.get('/users', async (req, res) => {
  await prisma.$connect()
  const users = await prisma.user.findMany();

  res.status(200).json({ users })
})
// lista todos jobs
app.get('/jobs', async (req, res) => {
  await prisma.$connect()
  const jobs = await prisma.job.findMany();

  res.status(200).json({ jobs })
})

//lista jobs em aberto
app.get('/openjobs', async (req, res) => {
  await prisma.$connect()
  const openJobs = await prisma.job.findMany({
    where: {
      aceitouId: ""
    }
  });
  res.status(200).json({ openJobs })
})

//lista jobs fechados
app.get('/closedjobs', async (req, res) => {
  await prisma.$connect()
  const openJobs = await prisma.job.findMany({
    where: {
      aceitouId: {
        not: ""
      }
    }
  });
  res.status(200).json({ openJobs })
})

//cria um user
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

//cria um job
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

//aceita um job
app.patch('/aceptjob', async (req, res) => {
  const selectedJob = req.body.selectedJob
  const aceitouRefTemporario = req.body.aceitouRefTemporario
  await prisma.$connect()
  await prisma.job.update({
    where: {
      ref: selectedJob,
    },
    data: {
      aceitouId: aceitouRefTemporario,
    }
  })
  res.send("job aceito")
})

app.listen(3030, () => { console.log('Servidor ATIVADO!')});