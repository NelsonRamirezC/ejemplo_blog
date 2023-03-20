import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


const Usuario = sequelize.define('usuarios', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail:true
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isInt: true, 
        }
    }
},{
    timestamps: false
  });

  export default Usuario;