import express from 'express';
const router = express.Router();
import {controllerViewHome, controllerViewLogin, controllerViewPost, controllerViewTecnologia, controllerViewCiencia} from '../controllers/views.controller.js'

router.get(["/", "/home", "/principal"], controllerViewHome, (req, res) =>{});
router.get("/tecnologia", controllerViewTecnologia, (req, res) =>{});
router.get("/ciencia", controllerViewCiencia, (req, res) =>{});
router.get(["/login"], controllerViewLogin, (req, res) =>{});
router.get(["/post"], controllerViewPost, (req, res) =>{});

export default router;