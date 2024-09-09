const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {}

module.exports = (sequelize) => {
    Pessoa.init({
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'Pessoa',
        timestamps: false,
    });

    return Pessoa;
};