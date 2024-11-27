const express = require('express');
const router = express.Router();
const { Checkin } = require('../models/Checkin'); // Importe o modelo correspondente

// Criar um novo check-in
router.post('/', async (req, res) => {
  try {
    const checkin = await Checkin.create(req.body);
    res.status(201).json(checkin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar check-in.' });
  }
});

// Listar todos os check-ins
router.get('/', async (req, res) => {
  try {
    const checkins = await Checkin.findAll();
    res.json(checkins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar check-ins.' });
  }
});

// Atualizar um check-in
router.put('/:id', async (req, res) => {
  try {
    const checkin = await Checkin.update(req.body, { where: { id: req.params.id } });
    res.json(checkin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar check-in.' });
  }
});

// Deletar um check-in
router.delete('/:id', async (req, res) => {
  try {
    await Checkin.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Check-in deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar check-in.' });
  }
});

module.exports = router;
