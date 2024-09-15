import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function Main() {
  const url: string = config.database_url || ''
  try {
    await mongoose.connect(url)
    logger.info('Database connected successfully')
    app.listen(config.port, () => {
      logger.info(`Our Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to listening database', err)
  }
}
Main()
