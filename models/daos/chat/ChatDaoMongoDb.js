const {configSQLite3} = require('../../../database/config')
const knex = require('knex')

class ChatDaoMongoDb {
  constructor(tableName) {
    this.knex = knex(configSQLite3);
    this.tableName = tableName;
  }
  async addMessage(message) {
    try {
      const result = await this.knex(this.tableName).insert(message);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getMessage() {
    try {
      const result = await this.knex.from(this.tableName).select("*");
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = ChatDaoMongoDb;