const express = require('express');
const router = express.Router();

const socios_controller = require('../controllers/socios.controller');

router.get('/suscribirse', socios_controller.get_suscribirse);

router.post('/suscribirse', socios_controller.post_suscribirse);

router.get('lista_socios', socios_controller.get_lista);

router.get('/:id', socios_controller.get_suscribirse);



module.exports = router;

