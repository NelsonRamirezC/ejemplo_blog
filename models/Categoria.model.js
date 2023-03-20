import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


const Categoria = sequelize.define('categorias', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
},{
    timestamps: false
});

export default Categoria;