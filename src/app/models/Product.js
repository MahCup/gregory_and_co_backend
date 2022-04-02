const product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        nome: {
            type: DataTypes.STRING
        },
        preco: {
            type: DataTypes.INTEGER
        },
        numeracao: {
            type: DataTypes.INTEGER
        },
        cor: {
            type: DataTypes.STRING
        },
        palmilha_anti_odor: {
            type: DataTypes.BOOLEAN
        },
        material: {
            type: DataTypes.STRING
        },
        publico: {
            type: DataTypes.STRING
        },
        tipo_de_fechamento: {
            type: DataTypes.STRING
        },
        amortecedor: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false,
        tableName: 'produto'
    });

    return Product;
}

module.exports = product;