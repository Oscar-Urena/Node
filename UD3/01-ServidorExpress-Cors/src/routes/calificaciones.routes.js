"use strict";

import { Router } from "express";
import * as controller  from "../controllers/calificaciones.controller.js";


const router = Router();

router.post('/calificaciones', controller.postCalificaciones)
router.get('/calificaciones', controller.getCalificaciones)

export {router as routerCalificaciones}