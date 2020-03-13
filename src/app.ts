import express from 'express'
import { Express } from 'express-serve-static-core'
import database from './database'
import routes from './routes'

class App {
  server: Express
  constructor() {
    this.server = express()
    this.init()
  }

  async init() {
    try {
      // if (process.env.NODE_ENV !== 'test') await db.connection.authenticate()
      // if (process.env.NODE_ENV === 'development') await db.connection.sync()
      this.middlewares()
      this.routes()
    } catch (error) {
      console.error(error, '\n Server failed to init.')
    }
  }

  middlewares() {
    this.server.use(express.json())
    // this.server.use(cors());
    // this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes)
    console.log('Routes are on!')
  }
}

export default new App().server