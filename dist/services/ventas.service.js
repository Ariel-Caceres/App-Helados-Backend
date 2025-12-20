"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasService = void 0;
const firebase_1 = require("../models/firebase");
exports.ventasService = {
    async getAllSells() {
        return await firebase_1.firebaseModel.getAll();
    },
    async getById(id) {
        return await firebase_1.firebaseModel.getById(id);
    },
    async create(nuevaVenta) {
        return await firebase_1.firebaseModel.create(nuevaVenta);
    },
    async update(id, ventaActualizada) {
        return await firebase_1.firebaseModel.update(id, ventaActualizada);
    },
    async delete(id) {
        return await firebase_1.firebaseModel.delete(id);
    }
};
