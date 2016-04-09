var Sequelize = require('sequelize');

module.exports =  new Sequelize(
    'design',
    'postgres',
    'zaq12wsxcde3',
    {
        dialect: 'postgres',
        host: '127.0.0.1'
    }
)