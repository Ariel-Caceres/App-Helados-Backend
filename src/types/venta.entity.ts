

export interface Venta {
    producto?: string
    id: string,
    fecha: string,
    cantidad: number,
    precio: number,
    precioTotal: number,
    status: "synced" | "pending-create" | "pending-delete" | "pending-update"
}