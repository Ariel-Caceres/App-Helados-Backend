export interface Compra {
    id: string
    fecha: string,
    precio: number,
    cantidad: number,
    status: "synced" | "pending-create" | "pending-update" | "pending-delete"
}