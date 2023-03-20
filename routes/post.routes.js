import express from 'express';
const router = express.Router();
import {controllerAddPost} from '../controllers/post.controller.js'

router.post("/post", controllerAddPost, (req, res) =>{});


export default router;