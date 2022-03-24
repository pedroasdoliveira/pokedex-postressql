import Routes from 'express'
const routes = Routes()
 
import * as PokemonController from "../controllers/PokemonController"
// const PokemonController = require('../controllers/PokemonController')

routes.get('/', PokemonController.getAll);

module.exports = routes;