import { Router } from "express";
import { ventasController } from "../controllers/ventas.controller";

export const VentasRouter = Router();

VentasRouter.get("/month/:mes", ventasController.getAll);
VentasRouter.get("/:id", ventasController.getById);
VentasRouter.post("/", ventasController.create);
VentasRouter.put("/:id", ventasController.update);
VentasRouter.delete("/:id", ventasController.delete);




