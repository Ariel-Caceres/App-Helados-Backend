import { Router } from "express";
import { loteController } from "../controllers/lote.controller";
export const loteRouter = Router()

loteRouter.get("/:producto", loteController.getLastLote)
