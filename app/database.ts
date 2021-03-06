require('dotenv').config();

import { Sequelize } from 'sequelize';
const url = window.location.origin;
console.log(url);
console.log(process.env.PG_URL);
console.log(process.env.DATABASE_URL);
const client = new Sequelize(process.env.PG_URL || process.env.HEROKU_POSTGRESQL_PUCE_URL, {
    define: {
        timestamps: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
});


export default client;