const express = require('express');
const router = express.Router();
const Passageiro = require('../models/Passageiro');

// Criar um novo passageiro
router.post('/', async (req, res) => {
  try {
    const passageiro = await Passageiro.create(req.body);
    res.status(201).json(passageiro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar passageiro.' });
  }
});

// Listar todos os passageiros
router.get('/', async (req, res) => {
  try {
    const passageiros = await Passageiro.findAll();
    res.json(passageiros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar passageiros.' });
  }
});

// Atualizar um passageiro
router.put('/:id', async (req, res) => {
  try {
    const passageiro = await Passageiro.update(req.body, { where: { id: req.params.id } });
    res.json(passageiro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar passageiro.' });
  }
});

// Deletar um passageiro
router.delete('/:id', async (req, res) => {
  try {
    await Passageiro.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Passageiro deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar passageiro.' });
  }
});

module.exports = router;
