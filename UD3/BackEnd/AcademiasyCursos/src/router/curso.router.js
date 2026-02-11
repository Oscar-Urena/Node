"use strict";
import { Router } from "express";
import * as X from "../controller/curso.controller.js";

const router = Router();

router.get("/curso", X.getCursos);

router.get("/curso/:id", X.getCurso);

router.post("/curso", X.postCurso);

router.put("/curso/:id", X.updateCurso);

router.delete("/curso/:id", X.deleteCurso);

export { router as routerCursos };