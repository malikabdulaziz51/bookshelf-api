const Hapi = require('@hapi/hapi')
const routes = require('./routes')
const process = require('process')

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    })

    server.route(routes)

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()
