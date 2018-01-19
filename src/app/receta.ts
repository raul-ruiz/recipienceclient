export class Receta {
    id: string;
    nombre: string;
    elaboracion: string;
    ingredientes: LineaIngrediente[];
    tags: string[];
    imagen: string;

  }

  export interface LineaIngrediente {
    ingrediente: String;
    cantidad: String;
  }

  export interface PortadaReceta {
    nombre: string;
    id: number;
  }