const express = require('express')
const http = require('http')
const path = require('path')
import { router } from "./routers/app.routers.js";
import { ProductosApi } from "./models/productos/productos.api.js";
import { ChatApi } from "./models/chat/chat.api.js";

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const chat = new ChatApi("chat")
const productos = new ProductosApi("productos")
const PORT = process.env.PORT || 8080;


// Template Engines
// app.set('views', './view');
// app.set('view engine', 'pug');
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
