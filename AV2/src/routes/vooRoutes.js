const express = require('express');
const router = express.Router();
const vooController = require('../controllers/vooController');

// Criar um novo voo
router.post('/', vooController.criarVoo);

// Listar todos os voos
router.get('/', vooController.listarVoos);

// Atualizar um voo
router.put('/:id', vooController.atualizarVoo);

// Deletar um voo
router.delete('/:id', vooController.deletarVoo);

module.exports = router;
