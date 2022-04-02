const item = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo_de_embalagem: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'item'
    });

    return Item;
}

module.exports = item;