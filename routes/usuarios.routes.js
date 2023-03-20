import express from 'express';
const router = express.Router();
import {controllerLogin} from '../controllers/usuarios.controller.js'

router.post("/login", controllerLogin, (req, res) =>{});


export default router;