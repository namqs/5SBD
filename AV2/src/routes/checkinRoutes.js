const express = require('express');
const router = express.Router();
const checkinController = require('../controllers/checkinController');

// Criar um novo check-in
router.post('/', checkinController.createCheckin);

// Listar todos os check-ins
router.get('/', checkinController.getAllCheckins);

// Atualizar um check-in
router.put('/:id', checkinController.updateCheckin);

// Deletar um check-in
router.delete('/:id', checkinController.deleteCheckin);

module.exports = router;

