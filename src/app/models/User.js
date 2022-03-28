const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        cpf: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome_completo: {
            type: DataTypes.STRING
        },
        genero: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING
        },
        telefone: {
            type: DataTypes.INTEGER
        },
        celular: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        tableName: 'usuario'
    });

    return User;
}

module.exports = user;