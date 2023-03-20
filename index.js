import app from './app.js'
import { sequelize } from './database/database.js'


//IMPORTACIONES DE MODELOS
import './models/Usuario.model.js'
import './models/Categoria.model.js'
import './models/Post.model.js'
import './models/Comentario.model.js'
import './models/LikeDislike.model.js'



//RELACIONES
import './models/relaciones.js'


const main = async () => {
    try{
        await sequelize.authenticate();
        console.log('Nos hemos conectado con éxito.');
        await sequelize.sync({ force: false, alter:true})
        let PORT = 3000;
        app.listen(PORT, () => console.log("Servidor escuchando en http://localhost:" + PORT));
    }catch(error){
        console.log("Ha ocurrido un error: ", error)
    }
    
}

main();