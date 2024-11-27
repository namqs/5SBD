const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Passageiro = sequelize.define('Passageiro', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, unique: true, allowNull: false },
  dataNascimento: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Passageiro;
