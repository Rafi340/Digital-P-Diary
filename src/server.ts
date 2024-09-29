import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});
let server: Server;
async function Main() {
  const url: string = config.database_url || '';
  try {
    await mongoose.connect(url);
    logger.info('Database connected successfully');
    server = app.listen(config.port, () => {
      logger.info(`Our Application listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to listening database', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    }
    process.exit(1);
  });
}
Main();
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
