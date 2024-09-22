import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf, prettyPrint } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: '!😎😎!' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      level: 'info',
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'sh-%DATE%-success.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: '😤😤😤' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      level: 'error',
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'sh-%DATE%-error.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
export { errorLogger, logger }
