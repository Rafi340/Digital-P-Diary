import { z } from "zod"

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
      password: z.string({
        required_error: 'name is required',
      }),
      avatar: z.string().optional()
    }),
  })
  export const UserZodSchema = {
    createUserZodSchema,
  }
