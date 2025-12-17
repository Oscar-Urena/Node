"use strict";

import { Router } from "express";
import * as controller  from "../controllers/modulos.controller.js";


const router = Router();

router.get('/modulos', controller.getModulos)

export {router as routerModulos}