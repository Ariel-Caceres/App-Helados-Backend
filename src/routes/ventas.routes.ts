import Express from "express";
import { ventasController } from "../controllers/ventas.controller";

export const router = Express.Router()
router.get("/ventas", ventasController.getAll)
router.get("/venta/:id", ventasController.getById)
