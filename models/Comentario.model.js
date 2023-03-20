import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


const Comentario = sequelize.define('comentarios', {
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    contenido: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
},{
    timestamps: true
  },
  /* {
    tableName: 'comentarios'
  } */);

  export default Comentario;