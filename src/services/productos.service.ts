import { firebaseModel } from "../models/firebase";
import { Producto } from "../types/producto.entity";

export const productosService = {
    async createProduct(nuevoProducto: Producto) {
        return await firebaseModel.createProduct(nuevoProducto)
    },
    async getAll() {
        return await firebaseModel.getAllProducts()
    }
}