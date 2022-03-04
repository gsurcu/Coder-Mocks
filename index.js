const express = require('express')
const http = require('http')
const path = require('path')
const router = require('./routers/app.routers')
const { ProductosDaoMongoDb } = require('./models/index')
const { ChatDaoMongoDb } = require('./models/index')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const chat = new ChatDaoMongoDb("chat")
const productos = new ProductosDaoMongoDb("productos")
const PORT = process.env.PORT || 8080;


app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname +'/public/index.html')
})
app.use(router);

io.on('connection', socket => {
  emitir()

  socket.on("incomingMessage", message =>{
    chat.guardar(message)
    emitir()
  })
})

const emitir = async () => await io.sockets.emit("chat", chat.listar())

server.listen(PORT, () => { console.log(`Running on port: ${PORT}`)})
