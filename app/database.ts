require('dotenv').config();

import { Sequelize } from 'sequelize';
let URL = process.env.NODE_ENV === "production" ? process.env.HEROKU_POSTGRESQL_PUCE_URL : process.env.PG_URL;
const client = new Sequelize(URL, {
    define: {
        timestamps: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});


export default client;