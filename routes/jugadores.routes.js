const express = require('express');
const router = express.Router();

const jugadores_controller = require('../controllers/jugadores.controller');

router.get('/', jugadores_controller.get_jugadores);

module.exports = router;

