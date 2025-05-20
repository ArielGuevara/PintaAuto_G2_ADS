const { DataTypes} = require('sequelize');
const { sequelize } = require('../config/database');

const MateriaPrima = sequelize.define('MateriaPrima', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
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
    unidadMedida: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'unidad_medida',
        validate: {
            notEmpty: {
                msg: 'La unidad de medida no puede estar vacía'
            },
            len: {
                args: [2, 10],
                msg: 'La unidad de medida debe tener entre 2 y 10 caracteres'
            }
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
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
    detalles:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[0, 255],
                msg:'Los detalles deben tener un máximo de 255 caracteres'
            }
        }
    },
    precioUnitario:{
        type: DataTypes.FLOAT,
        allowNull:false,
        field: 'precio_unitario',
        validate:{
            notEmpty:{
                msg:'El precio unitario no puede estar vacío'
            },
            isFloat:{
                msg:'El precio unitario debe ser un número'
            }
        }
    },
    fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_ingreso',
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: {
                msg: 'La fecha de ingreso debe ser una fecha válida'
            }
        },
        set(value) {
            // Evita que se actualice después de la creación
            if (this.isNewRecord) {
                this.setDataValue('fechaIngreso', value);
            }
            // Si no es un nuevo registro, ignora cualquier intento de set
        }
    }
}, {
    tableName: 'materia_prima',
    timestamps:false
});

module.exports = MateriaPrima;