const express = require('express');
const router = express.Router();

const jugadores_controller = require('../controllers/jugadores.controller');
const canSeePlayers = require('../util/canSeePlayers');

router.get('/', canSeePlayers, jugadores_controller.get_jugadores);

module.exports = router;

