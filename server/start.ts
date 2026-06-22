import getPort, {portNumbers} from 'get-port'

import {fastify} from 'fastify'
import {log} from './util/log'
import {usersRouter} from './api/users'

const {
  LOG_LEVEL: logLevel,
  HOST: host,
  PORT: port,
  NODE_ENV: nodeEnv,
} = process.env

const app = fastify({
  loggerInstance: log,
  disableRequestLogging: nodeEnv === 'development',
})

/*
  Ze względów bezpieczeństwa rejestrowanie `reactRouterFastify` zostało zakomentowane.
  Wyświetla on gotowe template'y reactowe do wyrenderowania po stronie przeglądarki.
  Jeżeli aplikacja będzie kiedyś przeze mnie zahostowana osobno niż tylko jako wtyczka przeglądarkowa to pewnie tego użyje.
  Póki co używam standardowej (json-owej) komunikacji między clientem a serverem.

  Przed użyciem należy najpierw zaimportować: `import {reactRouterFastify} from '@mcansh/remix-fastify/react-router'`
*/
// app.register(reactRouterFastify)
app.register(usersRouter, {prefix: '/api'})

const startServer = async () => {
  const desiredPort = Number(port)
  const portToUse = await getPort({
    port: portNumbers(desiredPort, desiredPort + 100),
  })

  try {
    const address = await app.listen({port: portToUse, host})
    log.info(`🚀 Server started in ${nodeEnv} mode at ${address}`)
    log.info(`🤖 Log level: "${logLevel}"`)

    if (portToUse !== desiredPort) {
      log.warn(
        `! Port ${desiredPort} is not available, using ${portToUse} instead.`,
      )
    }
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message)
    }
    process.exit(1)
  }
}

await startServer()
