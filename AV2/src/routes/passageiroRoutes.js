const express = require('express');
const router = express.Router();
const passageiroController = require('../controllers/passageiroController');

// Criar um novo passageiro
router.post('/', passageiroController.createPassageiro);

// Listar todos os passageiros
router.get('/', passageiroController.getAllPassageiros);

// Atualizar um passageiro
router.put('/:id', passageiroController.updatePassageiro);

// Deletar um passageiro
router.delete('/:id', passageiroController.deletePassageiro);

module.exports = router;

