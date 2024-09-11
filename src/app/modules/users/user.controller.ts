import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      sucess: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    res
      .status(400)
      .json({ sucess: false, message: 'Failed to create user', error: err })
  }
}
export default {
  createUser,
}
