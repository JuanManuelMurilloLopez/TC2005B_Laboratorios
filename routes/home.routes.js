const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home.controller');

router.get('/', home_controller.get_home);
router.get('/iniciar_sesion', home_controller.get_iniciar_sesion);
router.post('/iniciar_sesion', home_controller.post_iniciar_sesion);

module.exports = router;

