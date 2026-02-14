"use strict";
import { Router } from "express";
import * as X from "../controller/usuario.controller.js";
import { validar, validarNombre } from "../validators/usuario.validator.js";

const router = Router();


router.post("/usuarios/", validarNombre, validar,  X.register);
router.post("/usuarios/", validar, X.login);
router.post("/usuarios/", X.refreshToken);

export { router as routerUsuarios };