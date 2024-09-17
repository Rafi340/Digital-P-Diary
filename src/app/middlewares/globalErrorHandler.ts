import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
 /*  let statusCode = 500;
  let message = 'SOme'

  res.status().json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined
  }) */
  next()
}
export default globalErrorHandler
