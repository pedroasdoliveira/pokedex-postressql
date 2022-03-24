import * as Pokemon from '../models/Pokemon'
// const Pokemon = require('../models/Pokemon');

export async function getAll (req, res) {
    try {
        const pokedex = await Pokemon.findAll()
        res.render('index', {pokedex, pokemon})
    } catch (err) {
        res.status(500).send({err: err.message})
    }
}

module.exports = getAll
