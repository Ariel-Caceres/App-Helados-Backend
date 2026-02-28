import { firebaseModel } from "../models/firebase";
import { Producto } from "../types/producto.entity";
import { UUID } from "../types/uuid";

export const productosService = {
    async createProduct(nuevoProducto: Producto) {
        return await firebaseModel.createProduct(nuevoProducto)
    },
    async getAll() {
        return await firebaseModel.getAllProducts()
    },
    async update(id: UUID, productoActualizado: Partial<Producto>) {
        return await firebaseModel.updateProduct(id, productoActualizado)

    }
}