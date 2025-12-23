import { db } from "../firebase/conifg"
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, setDoc } from "firebase/firestore"
import { Venta } from "../types/venta.entity"

export const firebaseModel = {

    getAll: async (mes: string) => {
        try {
            // ✅ En el Back se usa .collection().get()
            const querySnapshot = await db.collection("ventas").get();

            // Mapeamos los docs. Nota: .data() en el Admin SDK es igual,
            // pero el snapshot viene directamente de la colección.
            const ventas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as unknown as Venta[];

            const ventasPorMes = ventas.filter(v => {
                // Tu lógica de filtrado sigue igual y está perfecta
                const mesVenta = Number(v.fecha.split("-")[1]);
                const mesBuscado = Number(mes);
                return mesVenta === mesBuscado;
            });

            return ventasPorMes;
        } catch (e) {
            console.error("Error al obtener las ventas de la DB:", e);
            throw e;
        }
    },

    getById: async (id: string) => {
        try {
            const docSnap = await db.collection("ventas").doc(id).get();

            if (!docSnap.exists) {
                return null;
            }

            return { id: docSnap.id, ...docSnap.data() } as Venta;
        } catch (e) {
            console.log("Error al obtener el documento", e);
            throw e;
        }
    },

    create: async (nuevaVenta: Venta) => {
        try {
            await db.collection("ventas").doc(nuevaVenta.id).set(nuevaVenta);
            console.log("Venta creada con éxito en Firebase");
        } catch (e) {
            console.log("Error al agregar una nueva venta", e);
            throw e;
        }
    },

    update: async (id: string, ventaActualizada: Partial<Venta>) => {
        try {
            await db.collection("ventas").doc(id).update(ventaActualizada);
            console.log("Venta editada con éxito");
            return true;
        } catch (e) {
            console.log("Error al actualizar la venta", e);
            throw e;
        }
    },

    delete: async (id: string) => {
        try {
            await db.collection("ventas").doc(id).delete();
            console.log("Venta eliminada con éxito");
        } catch (e) {
            console.log("Error al eliminar venta", e);
            throw e;
        }
    }
}
