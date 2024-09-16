import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import userRouter from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/api/v1/users', userRouter)

/* app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Error')
  //next('Error 😤😤')
}) */

// global error
app.use(globalErrorHandler)
export default app
