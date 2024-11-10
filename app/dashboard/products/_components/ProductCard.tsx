import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/dashboard/providers/${product.provider.providerId}`}>
      <Card className="max-w-[350px] mb-10 cursor-pointer">
        <CardHeader>{product.productName}</CardHeader>
        <Divider />
        <CardBody>
          <p>Nombre del producto: <b>{product.productName}</b> </p>
          <p>Precio del producto: <b>{product.price}</b></p>
          <p>Proveedor: <b>{product.provider.providerName}</b></p>
        </CardBody>
      </Card>
    </Link>
  );
}
