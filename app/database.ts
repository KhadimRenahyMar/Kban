require('dotenv').config();

import { Sequelize } from 'sequelize';
console.log(process.env.PG_URL);
const client = new Sequelize(process.env.PG_URL, {
    define: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
});


export default client;