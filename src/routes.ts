import { Router } from 'express'
// import UserController from './app/controllers/User'
import User2 from './app/models/User2'

const routes = new Router()

// routes.route('/users')
//   .get(UserController.findAll)
//   .post(UserController.create)

routes.route('/test').get((req, res) => {
  const test = await User2.findAll()
  return res.json(test)
})

// routes.route('/users').get((req, res) => res.json({ success: true }))

export default routes
