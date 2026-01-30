"use strict";
import { Router } from "express";
import * as X from "../controllers/calificaciones.controller.js";


const router = Router();

router.get("/calificaciones", X.getCalificaciones);

router.get("/calificaciones/:id", X.getCalificacion);

router.post("/calificaciones", X.addCalificacion);

router.put("/calificaciones/:id", X.updateCalificacion);

router.patch("/calificaciones/:id", X.updateCalificacion);

router.delete("/calificaciones/:id", X.deleteCalificacion);

export { router as calificacionesRoutes };
