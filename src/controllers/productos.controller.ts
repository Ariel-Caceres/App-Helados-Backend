import { Request, Response } from "express"
import { productosService } from "../services/productos.service"
export const productosController = {
    async createProduct(req: Request, res: Response) {
        try {
            const { id, nombre, precio, unidad } = req.body
            if (!id || !nombre || !precio || !unidad) {
                res.status(500).json("Falta data clave")
                return
            }
            const producto = {
                id,
                nombre,
                precio,
                unidad
            }
            await productosService.createProduct(producto)
            res.status(200).json("Producto creado con éxito")

        } catch (e) {
            console.log(e);

            res.status(500).json("Error al crear el nuevo producto")

        }
    }
}