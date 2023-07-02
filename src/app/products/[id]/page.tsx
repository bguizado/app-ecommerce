import { IProducts } from "@/models/product";

export default function product ( {params}:{params:IProducts} ) {
  return (
    <div>
      <p>Modelo de producto: {params.id} </p>
    </div>
  )
}