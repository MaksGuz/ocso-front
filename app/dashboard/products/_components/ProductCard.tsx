import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hover:scale-110 max-w-[350px]">
      <CardHeader>{product.productName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio del producto: <b>{product.productPrice}</b>
        </p>
      </CardBody>
    </Card>
  );
}