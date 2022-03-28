const brand = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        nome: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        timestamps: false,
        tableName: 'marca'
    });

    return Brand;
}

module.exports = brand;