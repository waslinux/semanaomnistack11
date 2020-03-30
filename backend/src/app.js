const express = require("express");
const routes = require("./routes");
const cors = require('cors')
const { errors } = require('celebrate')

const app = express();

// app.use(cors({
//     origin: 'http://meuapp.com' //endereço da api quando for homologado
// }))

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rotas/Recursos
 *
 */
/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where
 */

module.exports = app;