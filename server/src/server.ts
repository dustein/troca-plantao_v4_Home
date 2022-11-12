import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(201).send("Raiz.")
})

app.listen(3030, () => { console.log('Servidor ATIVADO!')});