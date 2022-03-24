import Sequelize from 'sequelize';

const connection = require('../database/db');

const Pokemon = connection.define('pokemon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    imagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    fraquezas: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    evolucao: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    habilidades: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = Pokemon;