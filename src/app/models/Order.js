const order = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        destinatario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor_total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'pedido'
    });

    return Order;
}

module.exports = order;