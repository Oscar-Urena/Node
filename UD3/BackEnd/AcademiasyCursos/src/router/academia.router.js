"use strict";

import { Router } from "express";
import * as X from "../controller/academia.controller.js";


const router = Router();

router.get("/academia", X.getAcademias);

router.get("/academia/:nombre", X.getAcademia);

router.get("/academia/:nombre/cursos", X.getCursosFromAcademia);

router.post("/academia", X.postAcademia);

router.post("/academia/:nombre/cursos", X.addCursoToAcademia);

router.put("/academia/:id/cursos/:cursoId", X.updateCursoAcademia);

router.put("/academia/:_id", X.updateAcademia);

router.delete("/academia/:id", X.deleteAcademia);

router.delete("/academia/:id/cursos/:cursoId", X.deleteCursoFromAcademia);

export { router as routerAcademias };