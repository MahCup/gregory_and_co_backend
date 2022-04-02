const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Adress = require('./Adress');
const Brand = require('./Brand');
const Inventory = require('./Inventory');
const Item = require('./Item');
const Order = require('./Order');
const Product = require('./Product');
const User = require('./User');


const adress = Adress(sequelize, Sequelize.DataTypes);
const brand = Brand(sequelize, Sequelize.DataTypes);
const inventory = Inventory(sequelize, Sequelize.DataTypes);
const item = Item(sequelize, Sequelize.DataTypes);
const order = Order(sequelize, Sequelize.DataTypes);
const product = Product(sequelize, Sequelize.DataTypes);
const user = User(sequelize, Sequelize.DataTypes);

const db = {
    adress,
    brand,
    inventory,
    item,
    order,
    product,
    user,
    sequelize
}



db.product.belongsTo(db.brand, { foreignKey: { name: 'brand_id', allowNull: false } });
db.product.hasOne(db.inventory, { foreignKey: { name: 'produto_id', allowNull: false } });
db.product.hasOne(db.item, { foreignKey: { name: 'produto_id', allowNull: false } });
db.item.belongsTo(db.order, { foreignKey: { name: 'pedido_id', allowNull: false } });
db.order.belongsTo(db.user, { foreignKey: { name: 'cpf', allowNull: false } });
db.adress.belongsTo(db.user, { foreignKey: { name: 'cpf', allowNull: false } });
db.adress.hasOne(db.order, { foreignKey: { name: 'endereco_id', allowNull: false } });


module.exports = db;