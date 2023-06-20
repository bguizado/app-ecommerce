import { Products } from "@/models/product";
import Image from "next/image";

const url = "https://run.mocky.io/v3/85ba4972-4fd9-4931-aeff-6e48ed21c785";

const api = () => {
  return fetch(url).then((res) => res.json());
};

export async function ListOfProducts() {
  const products = await api();
  return (
    <>
      {products.map((product: Products) => (
        <div key={product.id}>
          <p>{product.nombre}</p>
          <p>{product.marca}</p>
          <p>{product.descripcion}</p>
          <p>{product.precio}</p>
          <p>{product.valoracion}</p>
          <Image src={product.imagen1} alt={`imagen de ${product.nombre}`}  width={300} height={300} priority={true}/>
          <Image src={product.imagen2} alt={`imagen de ${product.nombre}_2`}  width={300} height={300} priority={true}/>
        </div>
      ))}
    </>
  )
}
