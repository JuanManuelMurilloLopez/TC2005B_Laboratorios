const express = require('express');
const router = express.Router();

const about_controller = require('../controllers/about.controller');

router.get('/', about_controller.get_about);

module.exports = router;

