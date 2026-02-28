import { UUID } from "node:crypto";

export interface Producto {
    id: UUID,
    nombre: string,
    unidad: string,
    precio: number
}