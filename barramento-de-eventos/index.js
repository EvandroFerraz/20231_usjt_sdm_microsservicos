const express = require('express')
const app = express()
app.use(express.json())
const axios = require ('axios')

const eventos = []

app.post('/eventos', async (req, res) => {
  const evento = req.body
  eventos.push(evento)
  await axios.post('http://localhost:4000/eventos', evento)
  await axios.post('http://localhost:5000/eventos', evento)
  try{
    await axios.post('http://localhost:6000/eventos', evento)
  }catch (err){}
  await axios.post('http://localhost:7000/eventos', evento)
  res.status(200).send({msg: 'ok'})
})

app.get('/eventos', async (req,res) => {
  await res.send(eventos)
})

app.listen(10000, () => console.log("Barramento de eventos. Porta 10000"))