import { Router } from "express";
import { VentasRouter } from "./ventas.routes";
import { ComprasRouter } from "./compras.routes";

const router = Router();

router.use("/sales", VentasRouter);
router.use("/purchases", ComprasRouter);


export { router };
