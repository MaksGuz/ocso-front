<<<<<<< HEAD
import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
=======
import { Product, Provider } from "@/entities";
import updateProduct from "@/actions/products/update";
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
import { Button, Input } from "@nextui-org/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuCheck } from "react-icons/lu";
<<<<<<< HEAD
export default function UpdateProduct({
  product,
  providers,
}: {
  product: Product;
  providers: Provider[];
}) {
=======

export default function UpdateProduct({product, providers}: {product: Product; providers: Provider[];}) {
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
  const { productId } = product;
  const updateProductById = updateProduct.bind(null, productId);
  return (
    <form action={updateProductById} className="p-10 flex flex-col gap-2">
      <Input
        name="productName"
        label="Nombre"
        defaultValue={product.productName}
      />
      <Input
        name="countSeal"
        label="Num. de Sellos"
        defaultValue={String(product.countSeal)}
      />
      <Input
        name="price"
        label="Precio"
        defaultValue={String(product.productPrice)}
      />
      <SelectProvider
        providers={providers}
        defaultProvider={product.provider.providerId}
      />
      <div className="flex flex-row flex-grow-0">
        <Button type="submit" color="primary">
          <LuCheck size="20" />
        </Button>
      </div>
    </form>
  );
}