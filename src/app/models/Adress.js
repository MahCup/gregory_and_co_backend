const adress = (sequelize, DataTypes) => {
    const Adress = sequelize.define('Adress', {
        identificador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cep: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'endereco'
    });

    return Adress;
}

module.exports = adress;