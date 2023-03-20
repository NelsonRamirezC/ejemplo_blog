import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


const LikeDislike = sequelize.define('likes_dislikes', {
    isLike: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
},{
    timestamps: false
  });

  export default LikeDislike;