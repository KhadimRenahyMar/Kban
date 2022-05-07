require('dotenv').config();
import path from "path";
import express from "express";
import expressSession from 'express-session';
import router from "./router";
const cors = require('cors');
const multer = require('multer');
const bodyParser = multer();

const server = express();

const PORT = process.env.PORT;

server.set('view engine', 'ejs');
server.set('views', './app/views');
const pathToStatic = path.resolve(__dirname, '../static');
server.use(express.static(pathToStatic));
server.use(express.urlencoded({ extended: true }));

server.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION,
    cookie: {
        secure: false,
        maxAge: (1000 * 60 * 60) // ça fait une heure
    }
}));
server.use(cors());
server.use(bodyParser.none());
server.use(router);

server.use((req, res) => {
    res.status(404).render('./utils/404');
});

server.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`);
});