"use strict";
import { Router } from "express";
import * as X from "../controllers/modulos.controller.js";

const router = Router();

router.get("/modulos", X.getModulos);

router.get("/modulos/:id", X.getModulo);

router.get("/modulos/idModulo/:idModulo", X.getModuloID);

router.post("/modulos", X.addModulo);

router.put("/modulos/:id", X.updateModulo);

router.patch("/modulos/:id", X.updateModulo);

router.delete("/modulos/:id", X.deleteModulo);

export { router as modulosRoutes };