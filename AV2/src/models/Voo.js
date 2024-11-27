const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Voo = sequelize.define(
  'Voo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_voo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horario_partida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'voos',
    timestamps: true,
  }
);

module.exports = Voo;
