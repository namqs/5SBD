const express = require('express');
const router = express.Router();
const Voo = require('../models/Voo');

// Criar um novo voo
router.post('/', async (req, res) => {
  try {
    const voo = await Voo.create(req.body);
    res.status(201).json(voo);
  } catch (error) {
    console.error('Erro ao criar voo:', error); // Adicionando o log detalhado
    res.status(500).json({ error: 'Erro ao criar voo.', details: error.message });
  }
});


// Listar todos os voos
router.get('/', async (req, res) => {
  try {
    const voos = await Voo.findAll();
    res.json(voos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar voos.' });
  }
});

// Atualizar um voo
router.put('/:id', async (req, res) => {
  try {
    const voo = await Voo.update(req.body, { where: { id: req.params.id } });
    res.json(voo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar voo.' });
  }
});

// Deletar um voo
router.delete('/:id', async (req, res) => {
  try {
    await Voo.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Voo deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar voo.' });
  }
});

module.exports = router;
