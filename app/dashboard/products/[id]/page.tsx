import { API_URL } from "@/constants";
import ProductCard from "../_components/ProductCard";
import { authHeaders } from "@/helpers/authHeaders";

export default async function ProductPage({
  params,  
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/products/${params.id}`, 
    {
      headers: {
        ...authHeaders(),
      }
  })
  const product = await response.json()
  return (
    <ProductCard product={product} />
  )

}
