"use strict";

import { Router } from "express";
import * as controller  from "../controllers/calificaciones.controller.js";


const router = Router();

router.post('/calificaciones', controller.postCalificaciones)

export {router as routerCalificaciones}