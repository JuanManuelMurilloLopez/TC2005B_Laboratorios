const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const socios_controller = require('../controllers/socios.controller');

router.get('/suscribirse', socios_controller.get_suscribirse);

router.post('/suscribirse', socios_controller.post_suscribirse);

router.get('/lista_socios', isAuth, socios_controller.get_lista);

router.get('/:id', isAuth, socios_controller.get_suscribirse);



module.exports = router;

