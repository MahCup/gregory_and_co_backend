const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        cpf: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nome_completo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'usuario'
    });

    return User;
}

module.exports = user;