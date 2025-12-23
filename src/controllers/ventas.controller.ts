import { error } from "node:console";
import { ventasService } from "../services/ventas.service";
import { Request, Response } from "express"
import { Venta } from "../types/venta.entity";

export const ventasController = {
    async getAll(req: Request, res: Response) {
        const mes = req.params.mes
        try {
            const ventas = await ventasService.getAllSells(mes)
            res.json(ventas)
        } catch (e) {
            console.log(e)
            res.status(500).json({ error: "Error al obtener ventas" })
        }
    },

    async getById(req: Request, res: Response) {
        const id = req.params.id
        try {
            const venta = await ventasService.getById(id)
            res.json(venta)
        } catch (e) {
            res.status(404).json({ error: "No se encontró la venta" })
        }
    },

    async create(req: Request, res: Response) {
        const d = new Date()
        const año = d.getFullYear()
        const mes = String(d.getMonth() + 1).padStart(2, "0");
        const dia = String(d.getDate()).padStart(2, "0");
        try {
            const { precio, precioTotal, cantidad, id } = req.body
            const nuevaVenta: Venta = {
                id: id,
                fecha: `${año}-${mes}-${dia}`,
                precio: precio,
                precioTotal: precioTotal,
                cantidad: cantidad,
                status: "synced"
            }
            console.log(nuevaVenta)
            await ventasService.create(nuevaVenta)
            res.status(201).json("Venta creada con éxito")
        } catch (e) {
            res.status(500).json("Error al crear la nueva venta")
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id
            const { precio, precioTotal, cantidad } = req.body
            const ventaActualizada = {
                precio: precio,
                precioTotal: precioTotal,
                cantidad: cantidad
            }
            await ventasService.update(id, ventaActualizada)
            res.status(201).json("Venta actualizada con éxito")
        } catch (e) {
            res.status(500).json("Error al actualizar la venta")
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id
            console.log(id)
            await ventasService.delete(id)
            res.status(200).json("Venta eliminada con éxito")
        } catch (e) {
            res.status(500).json("Error al eliminar la venta")
        }
    }

}
