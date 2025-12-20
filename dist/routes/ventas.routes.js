"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const ventas_controller_1 = require("../controllers/ventas.controller");
exports.router = express_1.default.Router();
exports.router.get("/sales", ventas_controller_1.ventasController.getAll);
exports.router.get("/sale/:id", ventas_controller_1.ventasController.getById);
exports.router.post("/sell", ventas_controller_1.ventasController.create);
exports.router.put("/edit/:id", ventas_controller_1.ventasController.update);
exports.router.delete("/delete/:id", ventas_controller_1.ventasController.delete);
