"use strict";
import { Router } from "express";
import * as X from "../controller/categoria.controller.js";

const router = Router();

router.get("/categoria", X.getCategorias);

router.get("/categoria/:id", X.getCategoria);

router.post("/categoria", X.postCategoria);

router.put("/categoria/:id", X.updateCategoria);

router.delete("/categoria/:id", X.deleteCategoria);

export { router as routerCategorias };