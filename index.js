const express = require('express')
const http = require('http')
const path = require('path')
const router = require('./routers/app.routers')
// import { router } from "./routers/app.routers.js";
const { ProductosDaoMongoDb } = require('./models/index')
// import { ProductosApi } from "./models/productos/productos.api.js";
const { ChatDaoMongoDb } = require('./models/index')
// import { ChatApi } from "./models/daos/chat/ChatDaoMongoDb.js";

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const chat = new ChatDaoMongoDb("chat")
const productos = new ProductosDaoMongoDb("productos")
const PORT = process.env.PORT || 8080;


// Template Engines
app.use('/static', express.static(__dirname + '/public'));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname +'/public/index.html')
})
app.use(router);

io.on('connection', socket => {
  emitir()

  socket.on("incomingMessage", message =>{
    chat.push(message)
    emitir()
  })
})

const emitir = () => io.sockets.emit("chat", chat)

server.listen(PORT, () => { console.log(`Running on port: ${PORT}`)})
