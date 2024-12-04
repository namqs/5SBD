const express = require('express');
const router = express.Router();
const passagemController = require('../controllers/passagemController');

// Adicionar uma nova passagem
router.post('/adicionar', passagemController.adicionarPassagem);

// Listar todas as passagens
router.get('/listar', passagemController.listarPassagens);

// Cancelar uma passagem
router.put('/cancelar/:id', passagemController.cancelarPassagem);

// Alterar o voo de uma passagem
router.put('/alterar-voo/:id', passagemController.alterarVooPassagem);

module.exports = router;

