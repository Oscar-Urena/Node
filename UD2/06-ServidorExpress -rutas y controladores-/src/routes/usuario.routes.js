"use strict";

import { Router } from "express";
import * as controller  from "../controllers/usuario.controller.js";


const router = Router();

router.get('/usuarios', controller.getUsuarios)
router.get('/usuarios/:id', controller.getUsuario)
router.post('/usuarios', controller.addUsuarios)
router.put('/usuarios/:id', controller.updateUsuario)
router.patch('/usuarios/:id', controller.patchUsuarios)
router.delete('/usuarios/:id', controller.deleteUsuario)

export {router as routerUsuarios}