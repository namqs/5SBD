const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Voo = require('./Voo'); 

const Passagem = sequelize.define(
  'Passagem',
  {
    codigo_passagem: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    classe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    data_compra: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ativa',
    },
    vooId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Voo, 
        key: 'id', // Chave primária da tabela Voo
      },
    },
  },
  {
    tableName: 'passagens',
    timestamps: true, 
  }
);

// Métodos
Passagem.prototype.cancelar_passagem = function () {
  if (this.status !== 'cancelada') {
    this.status = 'cancelada';
    return this.save();
  }
  throw new Error('A passagem já está cancelada!');
};

Passagem.prototype.alterar_voo = function (novo_voo) {
  if (!novo_voo) {
    throw new Error('Novo voo inválido!');
  }
  this.vooId = novo_voo.id; 
  return this.save();
};

module.exports = Passagem;
