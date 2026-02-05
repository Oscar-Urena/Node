"use strict";
import { Router } from "express";
import * as X from "../controller/usuario.controller.js";

const router = Router();


router.post("/usuarios/", X.register);
router.post("/usuarios/", X.login);
router.post("/usuarios/", X.refreshToken);

export { router as routerUsuarios };