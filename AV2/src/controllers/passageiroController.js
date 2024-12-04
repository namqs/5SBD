const Passageiro = require('../models/Passageiro');

// Criar um novo passageiro
exports.createPassageiro = async (req, res) => {
  try {
    const passageiro = await Passageiro.create(req.body);
    res.status(201).json(passageiro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar passageiro.' });
  }
};

// Listar todos os passageiros
exports.getAllPassageiros = async (req, res) => {
  try {
    const passageiros = await Passageiro.findAll();
    res.json(passageiros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar passageiros.' });
  }
};

// Atualizar um passageiro
exports.updatePassageiro = async (req, res) => {
  try {
    const passageiro = await Passageiro.update(req.body, { where: { id: req.params.id } });
    res.json(passageiro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar passageiro.' });
  }
};

// Deletar um passageiro
exports.deletePassageiro = async (req, res) => {
  try {
    await Passageiro.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Passageiro deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar passageiro.' });
  }
};
