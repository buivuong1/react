var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'zaq12wsxcde3',
        database: 'react',
        debug: true
    }
})

module.exports = knex;