"use strict";

import { Router } from "express";
import * as X from "../controller/academia.controller.js";


const router = Router();

router.get("/academia", X.getAcademias);

router.get("/academia/", X.getAcademia);

router.post("/academia", X.postAcademia);

router.put("/academia/:id", X.updateAcademia);

router.delete("/academia/:id", X.deleteAcademia);

export { router as routerAcademias };