import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


const Post = sequelize.define('posts', {
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
  });

  export default Post;