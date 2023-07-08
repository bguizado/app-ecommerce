export interface IProducts {
  id: string;
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  valoracion: number;
  imagen1: string;
  imagen2: string;
  categoria: string;
  clase: string;
  tipos: any;
}

//array con tipos de imagenes
//enum para no tener problemas con miniscula con mayuscula