const { Checkin } = require('../models/Checkin');

// Criar um novo check-in
exports.createCheckin = async (req, res) => {
  try {
    const checkin = await Checkin.create(req.body);
    res.status(201).json(checkin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar check-in.' });
  }
};

// Listar todos os check-ins
exports.getAllCheckins = async (req, res) => {
  try {
    const checkins = await Checkin.findAll();
    res.json(checkins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar check-ins.' });
  }
};

// Atualizar um check-in
exports.updateCheckin = async (req, res) => {
  try {
    const checkin = await Checkin.update(req.body, { where: { id: req.params.id } });
    res.json(checkin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar check-in.' });
  }
};

// Deletar um check-in
exports.deleteCheckin = async (req, res) => {
  try {
    await Checkin.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Check-in deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar check-in.' });
  }
};
