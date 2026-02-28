import { db } from "../firebase/conifg"
import { Compra } from "../types/compra.entity";
import { Venta } from "../types/venta.entity"
import type { UUID } from "../types/uuid"
import type { Producto } from "../types/producto.entity";
export const firebaseModel = {

    getAllSales: async (mes: string) => {
        try {
            const querySnapshot = await db.collection("ventas").get();
            const ventas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as unknown as Venta[];

            const ventasPorMes = ventas.filter(v => {
                const mesVenta = Number(v.fecha.split("-")[1].padStart(2, "0"));
                const mesBuscado = Number(mes);
                return mesVenta === mesBuscado;
            });

            return ventasPorMes;
        } catch (e) {
            console.error("Error al obtener las ventas de la DB:", e);
            throw e;
        }
    },

    getSaleById: async (id: string) => {
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

    createSale: async (nuevaVenta: Venta) => {
        if (!nuevaVenta.id) {
            throw new Error("venta.id es requerido");
        }
        try {
            await db.collection("ventas").doc(nuevaVenta.id).set(nuevaVenta);
            console.log("Venta creada con éxito en Firebase");
        } catch (e) {
            console.log("Error al agregar una nueva venta", e);
            throw e;
        }
    },

    updateSale: async (id: string, ventaActualizada: Partial<Venta>) => {
        try {
            await db.collection("ventas").doc(id).update(ventaActualizada);
            console.log("venta a editar", id)
            console.log("Venta editada con éxito");
            return true;
        } catch (e) {
            console.log("Error al actualizar la venta", e);
            throw e;
        }
    },

    deleteSale: async (id: string) => {
        try {
            await db.collection("ventas").doc(id).delete();
            console.log("Venta eliminada con éxito");
        } catch (e) {
            console.log("Error al eliminar venta", e);
            throw e;
        }
    },

    getAllPurchases: async (mes: string) => {
        try {
            const querySnapshot = await db.collection("compras").get()
            const compras = querySnapshot.docs.map(c => ({
                id: c.id,
                ...c.data()
            })) as unknown as Compra[]

            const comprasMes = compras.filter(c => {
                const mesCompra = c.fecha.split("-")[1]
                const mesBuscado = mes
                return mesCompra == mesBuscado

            })
            return comprasMes
        } catch (e) {
            console.log(e)
        }
    },

    createPurchase: async (nuevaCompra: Compra) => {
        try {
            await db.collection("compras").doc(nuevaCompra.id).set(nuevaCompra)
            console.log("Compra creada con éxito en Firebase")
        } catch (e) {
            console.log("Error al crear venta en Firebase", e)
        }
    },

    getPurchaseById: async (id: string) => {
        try {
            const querySnapshot = await db.collection("compras").doc(id).get()
            if (!querySnapshot.exists) {
                return null
            }
            const compra = { id: querySnapshot.id, ...querySnapshot.data() } as Compra
            return compra
        } catch (e) {
            console.log("Error al obtener el documento", e);
            throw e
        }
    },

    deletePurchase: async (id: string) => {
        try {
            await db.collection("compras").doc(id).delete()
            console.log("Compra eliminada con éxito");

        } catch (e) {
            console.log("Error al eliminar la compra");

        }

    },

    updatePurchase: async (id: UUID, compraActualizada: Partial<Compra>) => {
        try {
            await db.collection("compras").doc(id).update(compraActualizada)
            console.log("Compra editada exitosamente", id);
        } catch (e) {
            console.log("Error al actualizar compra", e);
            throw e
        }

    },

    createProduct: async (nuevoProducto: Producto) => {
        try {
            await db.collection("productos").doc(nuevoProducto.id).set(nuevoProducto)
            console.log("Producto creado con éxito");
        } catch (e) {
            console.log("Error al crear el producto", e);
        }
    },
    getAllProducts: async () => {
        try {
            const querySnapshot = await db.collection("productos").get()
            const productos = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }) as unknown as Producto)
            return productos
        } catch (e) {
            console.log("Error al traer los productos", e);
        }
    }

}
