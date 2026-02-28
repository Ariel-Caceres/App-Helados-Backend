import { Router } from "express";
import { productosController } from "../controllers/productos.controller";
export const productosRoutes = Router()

productosRoutes.post("/", productosController.createProduct)