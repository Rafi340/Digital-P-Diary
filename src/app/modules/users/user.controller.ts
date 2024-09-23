import { RequestHandler } from 'express'
import { z } from 'zod'
import { userService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        email: z.string({
          required_error: 'email is required',
        }),
        name: z.string({
          required_error: 'name is required',
        }),
      }),
    })

    await createUserZodSchema.parseAsync(req)
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      sucess: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
export const UserController = {
  createUser,
}
