"use strict";

import { Router } from "express";
import * as X from "../controller/academia.controller.js";
import { validarAcademia, validarIDAcademia } from "../validators/academia.validator.js";


const router = Router();

router.get("/academia", X.getAcademias);

router.get("/academia/:nombre", X.getAcademia);

router.get("/academia/:nombre/cursos", X.getCursosFromAcademia);

router.post("/academia", validarAcademia , X.postAcademia);

router.post("/academia/:nombre/cursos", X.addCursoToAcademia);

router.put("/academia/:id/cursos/:cursoId", X.updateCursoAcademia);

router.put("/academia/:_id", validarIDAcademia, validarAcademia, X.updateAcademia);

router.delete("/academia/:id", X.deleteAcademia);

router.delete("/academia/:nombre/cursos/:titulo", X.deleteCursoFromAcademia);

export { router as routerAcademias };