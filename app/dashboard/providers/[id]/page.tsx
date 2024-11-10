"use client";
import { useRouter } from "next/navigation";
import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/products/${product.productId}`);
  };

  return (
    <Card className="max-w-[350px] mb-10 cursor-pointer" onClick={handleClick}>
      <CardHeader>{product.productName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio del producto: <b>{product.price}</b>
        </p>
        <p>Proveedor: {product.provider.providerName}</p>
      </CardBody>
    </Card>
  );
}
