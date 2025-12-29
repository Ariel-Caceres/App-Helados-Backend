"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasController = void 0;
const ventas_service_1 = require("../services/ventas.service");
exports.ventasController = {
    async getAll(req, res) {
        const mes = req.params.mes;
        try {
            const ventas = await ventas_service_1.ventasService.getAllSells(mes);
            res.json(ventas);
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ error: "Error al obtener ventas" });
        }
    },
    async getById(req, res) {
        const id = req.params.id;
        try {
            console.log("🔍 Intentando obtener venta con ID:", id);
            const venta = await ventas_service_1.ventasService.getById(id);
            console.log("✅ Venta obtenida:", venta);
            res.json(venta);
        }
        catch (e) {
            console.error("❌ Error completo:", e);
            res.status(404).json({ error: "No se encontró la venta", details: String(e) });
        }
    },
    async create(req, res) {
        const d = new Date();
        const año = d.getFullYear();
        const mes = String(d.getMonth() + 1).padStart(2, "0");
        const dia = String(d.getDate()).padStart(2, "0");
        try {
            const { precio, precioTotal, cantidad, id } = req.body;
            const nuevaVenta = {
                id: id,
                fecha: `${año}-${mes}-${dia}`,
                precio: precio,
                precioTotal: precioTotal,
                cantidad: cantidad,
                status: "synced"
            };
            console.log(nuevaVenta);
            await ventas_service_1.ventasService.create(nuevaVenta);
            res.status(201).json("Venta creada con éxito");
        }
        catch (e) {
            res.status(500).json("Error al crear la nueva venta");
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const { precio, precioTotal, cantidad } = req.body;
            const ventaActualizada = {
                precio: precio,
                precioTotal: precioTotal,
                cantidad: cantidad
            };
            await ventas_service_1.ventasService.update(id, ventaActualizada);
            res.status(201).json("Venta actualizada con éxito");
        }
        catch (e) {
            res.status(500).json("Error al actualizar la venta");
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            console.log(id);
            await ventas_service_1.ventasService.delete(id);
            res.status(200).json("Venta eliminada con éxito");
        }
        catch (e) {
            res.status(500).json("Error al eliminar la venta");
        }
    }
};
