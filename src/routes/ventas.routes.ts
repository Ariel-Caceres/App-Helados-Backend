import Express from "express";
import { ventasController } from "../controllers/ventas.controller";

export const router = Express.Router()
router.get("/sales/:mes", ventasController.getAll)
router.get("/sale/:id", ventasController.getById)
router.post("/sell", ventasController.create)
router.put("/edit/:id", ventasController.update)
router.delete("/delete/:id", ventasController.delete)
