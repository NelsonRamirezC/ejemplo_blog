import { sequelize } from '../database/database.js'
import Post from '../models/Post.model.js'
import Usuario from '../models/Usuario.model.js'
import Categoria from '../models/Categoria.model.js'

export const controllerViewHome = async (req, res) => {
    let posts = await  Post.findAll({
        raw:true,
        order: [["createdAt", 'DESC']],
        attributes: ['titulo', 'contenido', "createdAt"],
        include: [Usuario, Categoria]
    });

    /* let likes = sequelize.query(`
        SELECT ca.nombre, count(ld."isLike") as cantidad FROM categorias ca
        JOIN LIKEs_DISLIKES ld
        ON ca.id = ld."usuarioId"
        group by ca.nombre
    `) */

    console.log(posts)
    let postFormateados = posts.map(post => {
        let object = {
            titulo: post.titulo,
            contenido: post.contenido,
            autor: post['usuario.nombre'],
            categoria: post["categoria.nombre"]
        }
        return object
    })
    res.render("home", {
        posts: postFormateados
    });
}


export const controllerViewTecnologia = async (req, res) => {
    let posts = await  Post.findAll({
        raw:true,
        attributes: ['titulo', 'contenido'],
        include: {
            model: Usuario,
            attributes: ['id', 'nombre']
        },
        include: {
            model: Categoria,
            where:{
                id: 1
            }
        }
    });

    console.log(posts)
    let postFormateados = posts.map(post => {
        let object = {
            titulo: post.titulo,
            contenido: post.contenido,
            autor: post['usuario.nombre'],
            categoria: post["categoria.nombre"]
        }
        return object
    })
    res.render("tecnologia", {
        posts: postFormateados
    });
}

export const controllerViewCiencia = async (req, res) => {
    let posts = await  Post.findAll({
        raw:true,
        attributes: ['titulo', 'contenido'],
        include: {
            model: Usuario,
            attributes: ['id', 'nombre']
        },
        include: {
            model: Categoria,
            where:{
                id: 2
            }
        }
    });

    console.log(posts)
    let postFormateados = posts.map(post => {
        let object = {
            titulo: post.titulo,
            contenido: post.contenido,
            autor: post['usuario.nombre'],
            categoria: post["categoria.nombre"]
        }
        return object
    })
    res.render("tecnologia", {
        posts: postFormateados
    });
}

export const controllerViewLogin = async (req, res) => {
    res.render("login");
}

export const controllerViewPost = async (req, res) => {
    let token = req.query.token;
    let categorias = await  Categoria.findAll({
        raw : true
    });
    if(token){
        res.render("post",{
            categorias
        });
    }else{
        res.render("post", {
            error: "No tiene permisos para acceder a esta vista."
        });
    }
    
}




