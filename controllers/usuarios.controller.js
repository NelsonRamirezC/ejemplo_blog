import { sequelize } from '../database/database.js'
import Usuario from '../models/Usuario.model.js'

export const controllerLogin= async (req, res) => {
    let email = req.body.email || 0;
    let password = req.body.password || 0;

    let usuario = await  Usuario.findOne({
        where: {
            email,
            password
          }
    });
    if(usuario == null){
        return res.status(400).json({code: 400, message: "Usuario no coincide"})
    }
    res.json({code: 200, message: "Usuario autenticado con éxito", token: 1234567890})
}
