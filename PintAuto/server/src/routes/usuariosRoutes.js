const express = require('express');
const router = express.Router();
const usuarioCrontroller = require('../controllers/usuarioController');
const auth = require('../middlewares/auth');

//router.use(auth);

router.get('/',usuarioCrontroller.obtenerUsuarios);
router.get('/:id',usuarioCrontroller.obtenerUsuarioPorId);
router.post('/',usuarioCrontroller.crearUsuario);
router.put('/:id',usuarioCrontroller.actualizarUsuario);
router.delete('/:id',usuarioCrontroller.eliminarUsuario);
module.exports = router;