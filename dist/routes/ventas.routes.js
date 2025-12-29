"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ventas_controller_1 = require("../controllers/ventas.controller");
exports.router = (0, express_1.Router)();
exports.router.get("/sales/:mes", ventas_controller_1.ventasController.getAll);
exports.router.get("/sale/:id", ventas_controller_1.ventasController.getById);
exports.router.post("/sell", ventas_controller_1.ventasController.create);
exports.router.put("/edit/:id", ventas_controller_1.ventasController.update);
exports.router.delete("/delete/:id", ventas_controller_1.ventasController.delete);
exports.router.get("/", (_req, res) => {
    res.send("🔥 Backend funcionando en Render");
});
