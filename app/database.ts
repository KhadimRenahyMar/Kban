require('dotenv').config();

import { Sequelize } from 'sequelize';
console.log("pgURL", process.env.PG_URL);
let URL = process.env.NODE_ENV === "production" ? process.env.HEROKU_POSTGRESQL_PUCE_URL : process.env.PG_URL;
console.log('url', URL)
const client = new Sequelize(process.env.PG_URL || process.env.HEROKU_POSTGRESQL_PUCE_URL, {
    define: {
        timestamps: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
});


export default client;