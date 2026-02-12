"use strict";
import { Router } from "express";
import * as X from "../controller/curso.controller.js";
import { validarCurso, validarIDCruso } from "../validators/cursos.validators.js";

const router = Router();

router.get("/curso", X.getCursos);

router.get("/curso/:titulo", X.getCurso);

router.post("/curso", validarCurso, X.postCurso);

router.put("/curso/:id", validarIDCruso, validarCurso, X.updateCurso);

router.delete("/curso/:id", X.deleteCurso);

export { router as routerCursos };