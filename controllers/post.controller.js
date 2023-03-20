import { sequelize } from '../database/database.js'
import Usuario from '../models/Usuario.model.js'

import Post from '../models/Post.model.js'

export const controllerAddPost = async (req, res) => {
    let token = req.body.token;
    let titulo = req.body.titulo;
    let contenido = req.body.contenido;
    let categoria = req.body.categoria;

    if(token){
        let post = await Post.create({
            titulo,
            contenido,
            categoriaId: categoria,
            usuarioId: 1 //mientras esto está fijo
        })

        console.log(post);

        if(post){
            return res.status(201).json({code: 201, message:"Post creado con éxito"})
        }else{
            return res.status(500).json({code: 500, message:"Error al crear el post."})
        }
        
    }else {
        return res.status(401).json({code: 401, message:"Usted no tiene permisos para crear un post."})
    }

}
