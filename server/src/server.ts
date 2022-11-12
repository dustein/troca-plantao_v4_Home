import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(201).send("Raiz.")
})

app.get('/users', (req, res) => {
  res.status(200).json({message: "users list"})
})

app.post('/users', (req, res) => {
  res.status(201).json({message: 'user created'})
})

app.listen(3030, () => { console.log('Servidor ATIVADO!')});