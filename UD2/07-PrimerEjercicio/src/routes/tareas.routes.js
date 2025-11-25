"use strict";

import { Router } from "express";
import * as controller from "../controllers/tareas.controller.js";

const router = Router();

router.get('/tareas', controller.getTareas);
router.get('/tareas/:id', controller.getTarea);
router.post('/tareas', controller.postTareas);
router.put('/tareas/:id', controller.updateTareas);
router.patch('/tareas/:id', controller.patchTareas);
router.delete('/tareas/:id', controller.deleteTareas);


export {router as routerTareas}