const {body, param} = require('express-validator');

const path = require('path');

const errors = [
    body('email').notEmpty().withMessage("No debe estar vacio").bail().isEmail().withMessage("Debe ser un e-mail válido"),
    body('contrasenia').notEmpty().withMessage("La contraseña no puede quedar vacia").isLength({min:6}).withMessage("La contraseña debe tener por lo menos 6 digitos"),
    body('contrasenia2').notEmpty().withMessage("Debe confirmar contraseña").isLength({min:6}).withMessage("La recontraseña debe tener por lo menos 6 digitos")
]

module.exports = errors;