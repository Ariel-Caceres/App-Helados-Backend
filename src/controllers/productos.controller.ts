import { Request, Response } from "express"
import { productosService } from "../services/productos.service"
import { UUID } from "../types/uuid"
export const productosController = {
    async createProduct(req: Request, res: Response) {
        try {
            const { id, nombre, precio, unidad, categoria } = req.body
            if (!id || !nombre || !precio || !unidad) {
                res.status(500).json("Falta data clave")
                return
            }
            const producto = {
                id,
                nombre,
                precio,
                unidad,
                categoria
            }
            await productosService.createProduct(producto)
            res.status(200).json("Producto creado con éxito")

        } catch (e) {
            console.log(e);

            res.status(500).json("Error al crear el nuevo producto")

        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const productos = await productosService.getAll()
            res.json(productos)
        } catch (e) {
            console.log("");
        }
    },

    async updateProduct(req: Request, res: Response) {
        try {
            const id = req.params.id as UUID
            const { nombre, precio, unidad } = req.body
            const productoActualizado = {
                nombre,
                precio,
                unidad
            }
            res.status(201).json("Producto actualizado con éxito")
            await productosService.update(id, productoActualizado)
        } catch (e) {
            res.status(500).json("Error al actualizar el producto")
        }
    },

    async deleteProduct(req: Request, res: Response) {
        try {
            const id = req.params.id as UUID
            await productosService.delete(id)
            res.status(200).json("Éxito al eliminar el producto")
        } catch (e) {
            res.status(500).json("Error al eliminar el producto")
        }
    }
}