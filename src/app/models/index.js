const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const User = require('./User');
const Brand = require('./Brand');

const user = User(sequelize, Sequelize.DataTypes);
const brand = Brand(sequelize, Sequelize.DataTypes);

const db = {
    user,
    brand,
    sequelize
}

module.exports = db;