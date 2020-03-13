import { Router, Request, Response } from 'express'
import UserController from './app/controllers/UserController'
const routes = Router()

routes.route('/users')
  .get(UserController.findAll)
  .post(UserController.create)

  routes.route('/users/:id')
  .get(UserController.findOne)

export default routes
