"use strict";
import { Router } from "express";
import * as X from "../controllers/usuario.controllers.js";

const router = Router();

router.get("/usuarios", getUsuarios);

router.get("/usuarios/:id", getUsuario);

router.post("/usuarios", addUsuario);

router.put("/usuarios/:id", updateUsuario);

router.patch("/usuarios/:id", patchUsuario);

router.delete("/usuarios/:id", deleteUsuario);

export { router as routerUsuarios };