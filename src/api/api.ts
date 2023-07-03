const url = "https://run.mocky.io/v3/05e8172e-684f-494b-98f5-906e6564e8e0";

export async function getProducts() {
  const response = await fetch(url, { cache: 'no-store' });
  const products = await response.json();

  return products;  
}


// export async function ListOfProducts() {
//   const products = await api();
//   return (
//     <>
//       {products.map((product: Products) => (
//         <div key={product.id}>
//           <p>{product.tipos.at(0).categoria}</p>
//           <p>{product.tipos.at(0).clase}</p>
//           <p>{product.nombre}</p>
//           <p>{product.marca}</p>
//           <p>{product.descripcion}</p>
//           <p>{product.precio}</p>
//           <p>{product.valoracion}</p>
//           <Image src={product.imagen1} alt={`imagen de ${product.nombre}`}  width={300} height={300} priority={true}/>
//           <Image src={product.imagen2} alt={`imagen de ${product.nombre}_2`}  width={300} height={300} priority={true}/>
//         </div>
//       ))}
//     </>
//   )
// }
