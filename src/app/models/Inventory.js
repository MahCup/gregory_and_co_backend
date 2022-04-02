const inventory = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
        quantidade: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        tableName: 'estoque'
    });

    return Inventory;
}

module.exports = inventory;