"use strict";
import { Router } from "express";
import * as X from "../controller/inmuebles.controller.js";
import { validarInmueble, manejarErroresValidacion } from "../validators/inmuebles.validator.js";

const router = Router();

router.get("/inmuebles", X.getInmuebles);

router.get("/inmuebles/:id", X.getInmueble);

router.get("/inmuebles/buscar", X.getInmueble);

router.post("/inmuebles", validarInmueble, manejarErroresValidacion ,X.postInmueble);

router.put("/inmuebles/:id", validarInmueble, manejarErroresValidacion , X.putInmueble);

router.patch("/inmuebles/:id", X.patchInmueble);

router.delete("/inmuebles/:id", X.deleteInmueble);

export { router as routerInmuebles };