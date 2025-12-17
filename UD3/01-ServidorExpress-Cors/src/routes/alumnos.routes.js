"use strict";

import { Router } from "express";
import * as controller  from "../controllers/alumnos.controller.js";


const router = Router();

router.get('/alumnos/:curso', controller.getAlumnos)

export {router as routerAlumnos}