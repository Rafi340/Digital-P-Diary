import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userService from './app/modules/users/user.service'
const app: Application = express()

app.use(cors())
// parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({
    id: '9999',
    name: 'admin',
    email: 'info@example.com',
    role: 'admin',
    password: '1234',

  })
  res.send('Hello World!')
})
export default app
