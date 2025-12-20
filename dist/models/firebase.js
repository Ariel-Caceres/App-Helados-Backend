"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseModel = void 0;
const conifg_1 = require("../firebase/conifg");
const firestore_1 = require("firebase/firestore");
exports.firebaseModel = {
    getAll: async () => {
        try {
            const querySnapshot = await (0, firestore_1.getDocs)((0, firestore_1.collection)(conifg_1.db, "ventas"));
            const ventas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return { ventas: ventas };
        }
        catch (e) {
            console.log("Error al obtener el documento");
            throw e;
        }
    },
    getById: async (id) => {
        try {
            const docRef = (0, firestore_1.doc)(conifg_1.db, "ventas", id);
            const docSnap = await (0, firestore_1.getDoc)(docRef);
            return ({ venta: docSnap.data() });
        }
        catch (e) {
            console.log("Error al obtener el documento", e);
            throw e;
        }
    },
    create: async (nuevaVenta) => {
        try {
            const docRef = await (0, firestore_1.addDoc)((0, firestore_1.collection)(conifg_1.db, "ventas"), nuevaVenta);
        }
        catch (e) {
            console.log("Error al agregar una nueva venta", e);
            throw e;
        }
    },
    update: async (id, ventaActualizada) => {
        try {
            const venta = (0, firestore_1.doc)(conifg_1.db, "ventas", id);
            await (0, firestore_1.updateDoc)(venta, ventaActualizada);
            console.log("Venta editada con éxito");
            return venta;
        }
        catch (e) {
            console.log("Error al actualizar la venta ");
            throw e;
        }
    },
    delete: async (id) => {
        try {
            await (0, firestore_1.deleteDoc)((0, firestore_1.doc)(conifg_1.db, "ventas", id));
            console.log("Venta eliminada con éxito");
        }
        catch (e) {
            console.log("Error al eliminar venta");
        }
    }
};
