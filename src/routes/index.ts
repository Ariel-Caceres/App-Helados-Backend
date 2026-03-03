import { Router } from "express";
import { VentasRouter } from "./ventas.routes";
import { ComprasRouter } from "./compras.routes";
import { productosRouter } from "./products.routes";
import { loteRouter } from "./lote.routes";

const router = Router();

router.use("/sales", VentasRouter);
router.use("/purchases", ComprasRouter);
router.use("/products", productosRouter);
router.use("/lote", loteRouter)


export { router };
