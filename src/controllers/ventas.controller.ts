import { error } from "node:console";
import { ventasService } from "../services/ventas.service";
import { Request, Response } from "express"

export const ventasController = {
    async getAll(req: Request, res: Response) {
        try {
            const ventas = await ventasService.getAllSells()
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
            const { fecha, precio, precioTotal, id, cantidad } = req.body
            const nuevaVenta = {
                fecha: `${año}-${mes}-${dia}`,
                precio: precio,
                precioTotal: precioTotal,
                cantidad: cantidad
            }
            await ventasService.create(nuevaVenta)
            res.status(201).json("Venta creada con exito")
            return nuevaVenta
        } catch (e) {
            res.status(500).json("Error al crear la nueva venta")
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id
            const { fecha, precio, precioTotal, cantidad } = req.body
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
    }

}
