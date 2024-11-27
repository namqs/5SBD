const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Passagem = require('./Passagem');

const Checkin = sequelize.define('Checkin', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dataHora: { type: DataTypes.DATE, allowNull: false },
  bagagem: { type: DataTypes.FLOAT, allowNull: true },
});

Checkin.belongsTo(Passagem, { foreignKey: 'passagemId' });

module.exports = Checkin;
