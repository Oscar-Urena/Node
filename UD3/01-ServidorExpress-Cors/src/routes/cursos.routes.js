"use strict";

import { Router } from "express";
import * as controller  from "../controllers/cursos.controller.js";


const router = Router();

router.get('/cursos', controller.getCursos)

export {router as routerCursos}