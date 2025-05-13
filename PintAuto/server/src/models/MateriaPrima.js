const {Sequelize} = require('sequelize');

const MateriaPrima = sequelize.define('MateriaPrima', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El nombre no puede estar vacío'
            },
            len: {
                args: [3, 80],
                msg: 'El nombre debe tener entre 3 y 80 caracteres'
            }
        }
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El código no puede estar vacío'
            },
            len: {
                args: [3, 20],
                msg: 'El código debe tener entre 3 y 20 caracteres'
            }
        }
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: 'La cantidad no puede estar vacía'
            },
            isInt:{
                msg:'La cantidad debe ser un número entero'
            }
        }
    },
    precioUnitario:{
        type: Sequelize.FLOAT,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'El precio unitario no puede estar vacío'
            },
            isFloat:{
                msg:'El precio unitario debe ser un número'
            }
        }
    }
}, {
    tableName: 'materia_prima',
    timestamps:false
});

module.exports = MateriaPrima;