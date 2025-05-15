const express = require('express');
const router = express.Router();    

const usuarioRoutes = require('./usuariosRoutes'); 
const { login } = require('../controllers/authController'); 

router.use('/usuarios', usuarioRoutes); // Rutas de usuarios
router.post('/login', login);

router.get('/', (req, res) => {
    res.json({
        message: 'API de PintAuto funcionando correctamente',
        version: '1.0.0'
    });
});

module.exports = router;