require('dotenv').config();

import { Sequelize } from 'sequelize';
console.log(process.env.PG_URL);
console.log(process.env.DATABASE_URL);
const client = new Sequelize(process.env.PG_URL, {
    define: {
        timestamps: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
});


export default client;