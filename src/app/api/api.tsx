import { Products } from "@/models/product";

const url = "https://run.mocky.io/v3/86b83581-4018-4a80-966f-ee108dc60d54";

const api = () => {
  return fetch(url).then((res) => res.json());
};

export async function ListOfProducts() {
  const products = await api();
  return (
    <>
      {products.map((product: Products, index: number) => (
        <div key={index}>
          <p>{product.nombre}</p>
          <p>{product.descripcion}</p>
          <p>{product.precio}</p>
          <p>{product.valoracion}</p>
        </div>
      ))}
    </>
  )
}
