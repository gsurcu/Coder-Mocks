const ContenedorMongoDb = require('../../contenedores/ContenedorMongoDb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const collection = "chat"
const chatSchema = new Schema({
  author: {
    id: {type: String},
    nombre: {type: String},
    apellido: {type: String},
    edad: {type: Number},
    alias: {type: String},
    avatar: {type: String}
  },
  text: {type: String}
})

class ChatDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super(collection,chatSchema)
  }
}

module.exports = ChatDaoMongoDb;