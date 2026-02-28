import { Router } from "express";
import { productosController } from "../controllers/productos.controller";
export const productosRouter = Router()

productosRouter.post("/", productosController.createProduct)
productosRouter.get("/", productosController.getAll)