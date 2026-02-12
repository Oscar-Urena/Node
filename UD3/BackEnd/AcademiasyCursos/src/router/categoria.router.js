"use strict";
import { Router } from "express";
import * as X from "../controller/categoria.controller.js";
import { validarCategoria, validarIDCategoria } from "../validators/categoria.validators.js";

const router = Router();

router.get("/categoria", X.getCategorias);

router.get("/categoria/:nombre", X.getCategoria);

router.post("/categoria", validarCategoria, X.postCategoria);

router.put("/categoria/:id", validarIDCategoria, validarCategoria, X.updateCategoria);

router.delete("/categoria/:id", X.deleteCategoria);

export { router as routerCategorias };