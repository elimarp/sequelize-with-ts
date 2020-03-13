import { Response, Request } from "express"
import User from "../models/User"
import ResponseMessage from "../utils/ResponseMessage"
import ResponseBody from "../utils/ResponseBody"

class UserController {
  static async findAll (req: Request, res: Response) {
    try {
      const users = await User.findAll()
      return res.status(200).json(new ResponseBody({
        message: ResponseMessage.QUERY_SUCCESSFULLY(),
        payload: users
      })) 
    } catch (error) {
      // TODO: Return CaughtError
      return res.status(500).json(error) 
    }
  }

  static async findOne (req: Request, res: Response) {
    const { id } = req.params
    try {
      const user = await User.findOne({ where: { id }})
      return res.status(200).json(new ResponseBody({
        message: ResponseMessage.QUERY_SUCCESSFULLY(),
        payload: user
      })) 
    } catch (error) {
      // TODO: Return CaughtError
      return res.status(500).json(error) 
    }
  }

  static async create (req: Request, res: Response) {
    const { name, email } = req.body
    // req.user = { name, email }

    try {
      const user = await User.create({ name, email })
      return res.status(201).json(new ResponseBody({
        message: ResponseMessage.CREATE_SUCCESSFULLY('user'),
        payload: user
      }))
    } catch (error) {
      // if (error.name === 'CaughtError') return res.status(error.status).json(new ResponseBody(error.body))
      if (error.name === 'CaughtError') return res.status(400).json(new ResponseBody({ message: ResponseMessage.INTERNAL_ERROR() }))
      // console.error(error) // TODO: log it
      return res.status(500).json(new ResponseBody({ message: ResponseMessage.INTERNAL_ERROR() }))
    }
  }

  static async update (req: Request, res: Response) {

  }

  static async delete (req: Request, res: Response) {

  }
}

export default UserController