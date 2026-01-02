import { Router } from "express";
import { comprasController } from "../controllers/compras.controller";


export const ComprasRouter = Router()

ComprasRouter.get("/purchases", comprasController.getAllPurchases)
ComprasRouter.post("/purchase", comprasController.createPurchase)
ComprasRouter.get("/purchase/:id", comprasController.getPurchaseById)
ComprasRouter.delete("/purchase/:id", comprasController.deletePurchase)
ComprasRouter.put("/purchase/:id", comprasController.updatePurchase)




ComprasRouter.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        method: req.method,
        path: req.originalUrl,
    });
});