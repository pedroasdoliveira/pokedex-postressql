import dotenv from 'dotenv';
import express from "express";
import path from "path";

import * as routes from './src/routes/routes.js'

dotenv.config();

const app = express();
app.set('view engine', 'ejs');

const __dirname = path.resolve(path.dirname(''));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

//Porta
//-----------------------------------------------------------------
const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Servidor rodando na porta local ${port}.`);
});