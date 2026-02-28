import type { UUID } from "./uuid"

export interface Producto {
    id: UUID,
    nombre: string,
    unidad: string,
    precio: number,
    categoria: string
}