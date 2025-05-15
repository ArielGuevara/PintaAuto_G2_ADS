const express = require('express');
const router = express.Router();    

const usuarioRoutes = require('./usuariosRoutes');  

router.use('/usuarios', usuarioRoutes); // Rutas de usuarios

router.get('/', (req, res) => {
    res.json({
        message: 'API de PintAuto funcionando correctamente',
        version: '1.0.0'
    });
});

module.exports = router;