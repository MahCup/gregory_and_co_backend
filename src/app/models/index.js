const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const User = require('./User');
const Brand = require('./Brand');
const Product = require('./Product');
const Inventory = require('./Inventory');

const user = User(sequelize, Sequelize.DataTypes);
const brand = Brand(sequelize, Sequelize.DataTypes);
const product = Product(sequelize, Sequelize.DataTypes);
const inventory = Inventory(sequelize, Sequelize.DataTypes);

const db = {
    user,
    brand,
    product,
    inventory,
    sequelize
}

db.product.belongsTo(db.brand, { foreignKey: 'marca_id' });
db.product.hasOne(db.inventory, { foreignKey: 'product_id' });

module.exports = db;