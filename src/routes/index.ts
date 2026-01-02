import { Router } from "express";
import { VentasRouter } from "./ventas.routes";
import { ComprasRouter } from "./compras.routes";

const router = Router();

router.use("/", VentasRouter);
router.use("/", ComprasRouter);


export { router };
