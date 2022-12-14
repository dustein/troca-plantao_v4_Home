import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json())


//lista todos users
app.get('/users', async (req, res) => {
  await prisma.$connect()
  const users = await prisma.user.findMany();

  console.log('Atendida solicitação de listagem de usuários.')
  res.status(200).json({ users })
})
// lista todos jobs
app.get('/jobs', async (req, res) => {
  await prisma.$connect()
  const jobs = await prisma.job.findMany();

  console.log('Atendida solicitação de listagem de jobs geral.')
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

  console.log('Atendida solicitação de listagem de jobs em aberto.')
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

  console.log('Atendida solicitação de listagem de jobs fechados.')
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

  console.log('Atendida solicitação de criação de usuário.')
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

  console.log('Atendida solicitação de criação de job.')
  res.status(201).json({ newJob })
})

//aceita um job
app.patch('/aceptjob', async (req, res) => {
  const selectedJob = req.body.selectedJob
  const aceitouRefTemporario = req.body.aceitouRefTemporario;
  await prisma.$connect()
  // User aceita o ref.Job, é gravado o ref.User dele
  await prisma.job.update({
    where: { ref: selectedJob },
    data: { aceitouId: aceitouRefTemporario }
  })
  // retorna o nome e matrícula do user que aceitou
  const userAccepted = await prisma.user.findUnique({
    where: { ref: aceitouRefTemporario },
    select: { name: true, matricula: true }
  })


  console.log(`Atendido solicitação de aceite de job pelo user ${userAccepted?.name}`)
  res.json( { Aceitou: userAccepted })
})

app.listen(3030, () => { console.log('Servidor ATIVADO! Porta 3030')});