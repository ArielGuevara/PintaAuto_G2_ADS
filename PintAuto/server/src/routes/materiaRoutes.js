const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/matPrimaController');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/', auth, materiaController.obtenerMateria);