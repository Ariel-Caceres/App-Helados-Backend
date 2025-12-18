import firebase from "firebase/compat/app";
import { firebaseModel } from "../models/firebase";
import { Venta } from "../types/venta.entity";


export const ventasService = {
    async getAllSells() {
        return await firebaseModel.getAll()
    },
    async getById(id: string) {
        return await firebaseModel.getById(id)
    },
    async create(nuevaVenta: Venta) {
        return await firebaseModel.create(nuevaVenta)
    },
    async update(id: string, ventaActualizada: Partial<Venta>) {
        return await firebaseModel.update(id, ventaActualizada)
    },
    async delete(id: string) {
        return await firebaseModel.delete(id)
    }
}